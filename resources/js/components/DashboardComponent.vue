<template>
  <div class="container-fluid">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">Vue Dasboard Component</div>

                  <div class="card-body">
                      <TableComponent />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TableComponent from './TableComponent'

export default {
  name: 'DashboardComponent',
  components: {
    TableComponent,
  }
}
</script>