<template>
  <div>
    <UserModal />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h3>Учащиеся</h3>
              <span
                class="btn-add float-right"
                @click="showCreateModal">
                +
              </span>
            </div>
            <div class="card-body">
              <TableComponent
                :objects="users"
                @update="showUpdateModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import UserModal from '../components/UserModal';
import TableComponent from '../components/DataTable/TableComponent';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	components: {
		TableComponent,
		UserModal,
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
