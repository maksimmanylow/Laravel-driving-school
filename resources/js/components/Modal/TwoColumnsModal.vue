<template>
  <transition name="modal">
    <div
      v-show="show"
      class="modal-mask"
      @click="close">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          @click.stop>
          <div class="modal-header">
            <slot name="header">default header</slot>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col">
                  <slot name="body-left">default body</slot>
                </div>
                <div class="col">
                  <slot name="body-right">default body</slot>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="footer">default footer</slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
	props: {
		show: { type: Boolean, default: false }
	},
	mounted: function () {
		document.addEventListener('keydown', (e) => {
			if (this.show && e.keyCode == 27) {
				this.close();
			}
		});
	},
	methods: {
		close: function () {
			this.$emit('close');
		},
	}
};
</script>
