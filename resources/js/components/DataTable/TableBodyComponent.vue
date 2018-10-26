<template>
  <tbody>
    <tr
      v-for="object in objects"
      :key="object.id">
      <td v-for="key in Object.keys(object)" >{{ object[key] }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
	props: {
		objects: Array,
	}
};
</script>
