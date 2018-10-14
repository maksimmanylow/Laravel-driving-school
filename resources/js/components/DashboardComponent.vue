<template>
  <div class="container-fluid">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">Vue Dasboard Component</div>
                  <div class="card-body">
                    <div  >
                      <button id="show-modal" @click='showModal=true'>Добавить учащегося</button>
                      <NewUserModal :show="showModal" @close='showModal=false' />
                    </div>
                    <TableComponent />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TableComponent from './DataTable/TableComponent';
import NewUserModal from './NewUserModal';

export default {
  name: 'DashboardComponent',
  components: {
    TableComponent,
    NewUserModal,
  },
  data () {
    return {showModal: false}
  },
}
</script>
