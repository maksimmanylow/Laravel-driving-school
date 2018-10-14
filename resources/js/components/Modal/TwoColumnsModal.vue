<template>
  <transition name="modal">
    <div class="modal-mask" v-show="show" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>
          <div class="modal-body container">
            <div class="row">
              <div class="col-md-6"><slot name="body-left">default body</slot></div>
              <div class="col-md-6"><slot name="body-right">default body</slot></div>
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
      show: Boolean
    },
    mounted: function () {
    document.addEventListener("keydown", (e) => {
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
}
</script>
