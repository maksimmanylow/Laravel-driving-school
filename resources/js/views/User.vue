<template>
  <div>
    <NewUserModal
      :show="showUserModal"
      @close="showModal(false)"
    />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h3>Учащиеся</h3>
              <span
                class="btn-add float-right"
                @click="showModal(true)">
                +
              </span>
            </div>
            <div class="card-body">
              <TableComponent :objects="users" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import NewUserModal from '../components/NewUserModal';
import TableComponent from '../components/DataTable/TableComponent';
import { mapState, mapMutations } from 'vuex';

export default {
	components: {
		TableComponent,
		NewUserModal,
	},
	computed: mapState({
		users: state => state.user.all,
		showUserModal: state => state.user.modalShow,
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
			'showModal'
		]),
	}
};
</script>
