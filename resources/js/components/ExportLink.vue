<template>
  <div
    v-show="show"
    class="export-link text-right">
    <a
      :href="link"
      target="_blank">export</a>
  </div>
</template>
<script>
export default {
	props: {
		link: {
			type: String,
			default: '/404'
		},
		show: {
			type: Boolean,
			default: false
		}
	},
};
</script>
