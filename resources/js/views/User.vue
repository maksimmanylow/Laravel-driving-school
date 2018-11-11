<template>
  <div>
    <Message />
    <UserModal />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3>Учащиеся</h3>
        </div>
        <div class="col-lg-6 text-right">
          <SearchInput/>
          <span
            class="btn-add btn-add--outline"
            @click="showCreateModal">
            +
          </span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <TableComponent
            :objects="users"
            @update="showUpdateModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import UserModal from '../components/UserModal';
import Message from '../components/Message';
import SearchInput from '../components/SearchInput';
import TableComponent from '../components/DataTable/TableComponent';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	components: {
		TableComponent,
		UserModal,
		Message,
		SearchInput,
	},
	computed: mapState({
		users: state => state.user.all,
	}),
	// watch: {
	// 	// call again the method if the route changes
	// 	'$route': 'fetchData'
	// },
	created () {
		this.$store.dispatch('user/getAll');
	},
	methods: {
		...mapMutations('user', [
			'showCreateModal',
			'showUpdateModal',
		]),
	}
};
</script>
