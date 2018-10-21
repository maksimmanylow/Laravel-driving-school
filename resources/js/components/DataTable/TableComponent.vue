<template>
<div>
  <table>
    <TableHeadFilterComponent :columns=columns />
    <TableBodyComponent :rows=rows :columns=columns />
  </table>
</div>
</template>

<script>
import TableHeadFilterComponent from './TableHeadFilterComponent'
import TableBodyComponent from './TableBodyComponent'
import axios from 'axios';

export default {
  name: 'TableComponent',
  components: {
    TableHeadFilterComponent,
    TableBodyComponent,
  },
  props: {
    fetchURI: String
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
    // axios
    //   .get(this.fetchURI)
    //   .then(response => {
    //     this.columns = response.columns;
    //     this.rows = response.data;
    //   })
    // .catch(e => {
    //   console.error(e)
    // });
  }
}
</script>
