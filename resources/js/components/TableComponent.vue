<template>
<div>
  <TableGroupDropdownComponent />
  <table>
    <TableHeadFilterComponent />
    <TableBodyComponent />
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
  }
}
</script>