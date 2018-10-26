<template>
  <thead>
    <tr>
      <th
        v-for="(vaule, key) in object"
        :key="key">{{ key }}</th>
    </tr>
  </thead>
</template>

<script>
import BaseInputText from '../BaseInputText';

export default {
	components: {
		BaseInputText,
	},
	params: {
		object: Object
	}
};
</script>
