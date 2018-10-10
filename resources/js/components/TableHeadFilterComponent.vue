<template>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
</template>

<script>
import BaseInputText from './BaseInputText';

export default {
  name: 'TableHeadFilterComponent',
  components: {
    BaseInputText,
  }
}
</script>