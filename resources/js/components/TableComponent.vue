<template>
<div>
  <TableGroupDropdownComponent />
  <table>
    <TableHeadFilterComponent :filters="filters" />
    <TableBodyComponent :rows="rows" />
  </table>
</div>
</template>

<script>
import TableGroupDropdownComponent from './TableGroupDropdownComponent'
import TableHeadFilterComponent from './TableHeadFilterComponent'
import TableBodyComponent from './TableBodyComponent'

export default {
  name: 'TableComponent',
  components: {
    TableGroupDropdownComponent,
    TableHeadFilterComponent,
    TableBodyComponent,
  },
  data() {
    return {
      rows: [],
      filters: [],
    }
  },
  methods: {
    filter () {
      
    }
  }
}
</script>