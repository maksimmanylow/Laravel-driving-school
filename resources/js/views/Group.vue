<template>
  <div>
    <NewGroupModal
      :show="showGroupModal"
      @close="showGroupModal=false"/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h3>Группы</h3>
              <span
                class="btn-add float-right"
                @click="showGroupModal=true">
                +
              </span>
            </div>
            <div class="card-body">
              <TableComponent :objects="groups" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import NewGroupModal from './NewGroupModal';
import TableComponent from './DataTable/TableComponent';
import C from '../constants';

export default {
	components: {
		TableComponent,
		NewGroupModal
	},
	data () {
		return {
			showGroupModal: false,
			groups: null,
		};
	},
	mounted: function () {
		axios.get(C.api.group)
			.then(reposnse => {
				this.groups = reposnse.data.data;
			})
			.catch(e => { this.errors.push(e); });
	},
	methods: {

	},
};
</script>
