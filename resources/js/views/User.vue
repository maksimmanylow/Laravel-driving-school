<template>
  <div>
    <NewUserModal
      :show="showUserModal"
      @close="showUserModal=false"
      @userSaved="userSaved"
    />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h3>Учащиеся</h3>
              <span
                class="btn-add float-right"
                @click="showUserModal=true">
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
import NewUserModal from './NewUserModal';
import TableComponent from './DataTable/TableComponent';
import C from '../constants';

export default {
	components: {
		TableComponent,
		NewUserModal,
	},
	data () {
		return {
			showUserModal: false,
			users: null,
		};
	},
	mounted: function () {
		axios.get(C.api.user)
			.then(reposnse => {
				this.users = reposnse.data.data;
			})
			.catch(e => { this.errors.push(e); });
		axios.get(C.api.group)
			.then(reposnse => {
				this.groups = reposnse.data.data;
			})
			.catch(e => { this.errors.push(e); });
	},
	methods: {
		userSaved(response) {
			console.log('userSaved fired');
		},
	},
};
</script>
