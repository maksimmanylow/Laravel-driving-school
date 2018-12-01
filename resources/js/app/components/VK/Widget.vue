<template>
  <div id="vk_groups"/>
</template>
<script>
import C from './constants';

export default {
	data: function () {
		return {
			API_URI: C.API_URI,
		};
	},
	mounted: function() {
		let vkScript = document.createElement('script');
		vkScript.setAttribute('src', this.API_URI);
		document.head.appendChild(vkScript);
		vkScript.onload = this.initWidget;
	},
	methods: {
		initWidget: function() {
			VK.Widgets.Group('vk_groups', {
				mode: 0,
				width: 300,
				height: 160,
				color1: 'FFFFFF',
				color2: '2B587A',
				color3: '5B7FA6'
			}, 108946337);
		}
	},
};
</script>
