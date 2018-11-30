<template>
  <div>
    <h1>Map</h1>
    <map-loader
      :map-config="mapConfig"
      api-key="YOUR API KEY"
    >
      <template v-for="marker in markers">
        <child-marker :position="marker" />
      </template>
    </map-loader>
  </div>
</template>

<script>
import MapLoader from './MapLoader.vue';
import ChildMarker from './ChildMarker';

export default {
	components: {
		MapLoader,
		ChildMarker
	},
	props: {
		markers: Array
	},
	data(){
		return {
			mapConfig: {
				zoom: 12,
				center: this.markers[0]
			}
		};
	},
};
</script>
