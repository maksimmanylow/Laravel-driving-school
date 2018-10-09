<template>
     <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{ row.group }}</td>
        <td>{{ row.created_at }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.surname }}</td>
        <td>{{ row.phone }}</td>
        <td>{{ row.transmission }}</td>
        <td>
          <a class="btn btn-primary" :href="/admin/useredit/{{ row.id }}" role="button">Ред.</a>
          <a class="btn btn-danger item_list_delete" :href="/admin/userdelete/{{ row.id }}" role="button">Удал.</a>
        </td>
      </tr>
    </tbody>
</template>

<script>
export default {
  name: 'TableComponent',
}
</script>