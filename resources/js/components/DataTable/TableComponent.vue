<template>
  <div v-if="objects && objects.length" >
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th
            v-for="(vaule, key) in objects[0]"
            :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="object in objects"
          :key="object.id">
          <td
            v-for="(value, key) in object"
            :key="key" >{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	props: {
		objects: { type: Array, default: () => [] },
		// rows: { type: Array, default: () => [] },
		// columns: { type: Array, default: () =>[] },

	},
	data: function() {
		return {
			filters: [],
		};
	},
	methods: {
		filter () {

		}
	},
};
</script>
