<template>
  <thead>
    <tr>
      <th v-for="column in columns">{{ column }}</th>
    </tr>
  </thead>
</template>

<script>
import BaseInputText from '../BaseInputText';

export default {
  name: 'TableHeadFilterComponent',
  components: {
    BaseInputText,
  },
  params: {
    columns: Array
  }
}
</script>