<template>
  <Modal
    :show="message.show">
    <template slot="header">
      <h3>{{ message.text }} </h3>
    </template>
    <template slot="body">
      <!-- <img
        :src="message.image"
        alt=""> -->
    </template>
    <!-- <template slot="footer">

    </template> -->
  </Modal>
</template>

<script>
import Modal from './Modal/Modal';
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
	components: {
		Modal,
	},
	computed: {
		...mapState({
			message: state => state.user.message,
		}),
	},
};
</script>
