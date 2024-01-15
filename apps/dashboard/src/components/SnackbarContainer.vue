<template>
  <transition-group name="toast-fade" tag="div" class="ui-snackbar-container">
    <woot-snackbar v-for="snackMessage in snackMessages" :key="snackMessage.key" :message="snackMessage.message"
      :action="snackMessage.action" />
  </transition-group>
</template>

<script>
import emitter from '../helper/v4/eventBus';
import WootSnackbar from './Snackbar.vue';

export default {
  components: {
    WootSnackbar,
  },
  props: {
    duration: {
      type: Number,
      default: 2500,
    },
  },

  data() {
    return {
      snackMessages: [],
    };
  },

  mounted() {
    emitter.on('newToastMessage', this.onNewToastMessage);
  },
  beforeDestroy() {
    emitter.$off('newToastMessage', this.onNewToastMessage);
  },
  methods: {
    onNewToastMessage(message, action) {
      this.snackMessages.push({
        key: new Date().getTime(),
        message,
        action,
      });
      window.setTimeout(() => {
        this.snackMessages.splice(0, 1);
      }, this.duration);
    },
  },
};
</script>
