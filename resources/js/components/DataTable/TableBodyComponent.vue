<template>
     <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td v-for="column in columns" >{{ row[column] }}</td>
        </tr>
    </tbody>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    columns: Array,
    rows: Array
  }
}
</script>