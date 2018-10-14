<template>
  <div>
    <NewUserModal :show="showUserModal" @close="showUserModal=false"/>
    <NewGroupModal :show="showGroupModal" @close="showGroupModal=false"/>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>Учащиеся</h3>
            </div>
            <div class="card-body">
              <button id="show-modal" @click="showUserModal=true">Добавить учащегося</button>
              <TableComponent :fetchURI="this.usersFetchURI"/>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>Группы</h3>
            </div>
            <div class="card-body">
              <button id="show-modal" @click="showGroupModal=true">Добавить группу</button>
              <TableComponent :fetchURI="this.groupsFetchURI"/>
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
      usersFetchURI: "/api/users",
      groupsFetchURI: "/api/groups"
    }
  },
}
</script>
