<template>
  <div>
    <NewUserModal :show="showUserModal" @close='showUserModal=false' />
    <NewGroupModal :show="showGroupModal" @close='showGroupModal=false' />
  <div class="container-fluid">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">Vue Dasboard Component</div>
                  <div class="card-body">
                    <div  >
                      <button id="show-modal" @click='showUserModal=true'>Добавить учащегося</button>
                      <button id="show-modal" @click='showGroupModal=true'>Добавить группу</button>
                    </div>
                    <TableComponent />
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import TableComponent from './DataTable/TableComponent';
import NewUserModal from './NewUserModal';
import NewGroupModal from './NewGroupModal';

export default {
  name: 'DashboardComponent',
  components: {
    TableComponent,
    NewUserModal,
    NewGroupModal
  },
  data () {
    return {
      showUserModal: false,
      showGroupModal: false,
      }
  },
}
</script>
