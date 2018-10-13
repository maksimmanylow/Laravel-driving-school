<template>
<div>
  <TableGroupDropdownComponent />
  <table>
    <TableHeadFilterComponent :columns=columns />
    <TableBodyComponent :rows=rows :columns=columns />
  </table>
</div>
</template>

<script>
import TableGroupDropdownComponent from './TableGroupDropdownComponent'
import TableHeadFilterComponent from './TableHeadFilterComponent'
import TableBodyComponent from './TableBodyComponent'
import axios from 'axios';

export default {
  name: 'TableComponent',
  components: {
    TableGroupDropdownComponent,
    TableHeadFilterComponent,
    TableBodyComponent,
  },
  props: {
    data: Array,
    columns: Array,
    rows: Array,
  },
  data() {
    return {
      columns: [],
      rows: [],
      filters: [],
    }
  },
  methods: {
    filter () {
      
    }
  },
  mounted() {
    axios
      .get('/api/users')
      .then(response => {
        this.columns = response.columns;
        this.rows = response.users;
      })
    .catch(e => {
      console.error(e)
    });
  }
}
</script>