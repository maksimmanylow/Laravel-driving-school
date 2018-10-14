<template>
  <transition name="modal">
    <div class="modal-mask" v-show="show" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <slot name="header">default header</slot>
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
