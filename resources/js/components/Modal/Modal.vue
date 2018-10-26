<template>
  <transition name="modal">
    <div
      v-show="show"
      class="modal-mask"
      @click="close">
      <div class="modal-wrapper">
        <div class="container-fluid">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <div
                class="modal-container"
                @click.stop>
                <div class="modal-header">
                  <slot name="header">default header</slot>
                  <!-- <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="close">
                    <span aria-hidden="true">&times;</span>
                  </button> -->
                </div>
                <div class="modal-body">
                  <slot name="body">default body</slot>
                </div>
                <div class="modal-footer">
                  <slot name="footer">default footer</slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
	props: {
		show: {type: Boolean, default: false}
	},
	mounted: function () {
		document.addEventListener('keydown', (e) => {
			if (this.show && e.keyCode == 27) {
				this.close();
			}
		});
	},
	methods: {
		close: function() {
			this.$emit('close');
		},
	}
};
</script>
