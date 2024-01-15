
<script setup>
import emitter, { BUS_EVENTS } from '@/v4/helpers/eventBus';
import WootSnackbar from './Snackbar.vue';

const props = defineProps({
  duration: {
    type: Number,
    default: 2500,
  },
})
const snackMessages = ref([])

const onToastMessageCreated = (message, action) => {
  snackMessages.push({
    key: new Date().getTime(),
    message,
    action,
  });
  window.setTimeout(() => { snackMessages.splice(0, 1) }, props.duration);
};

onMounted(() => {
  emitter.on(BUS_EVENTS.TOAST_MESSAGE_CREATED, onToastMessageCreated);
});

onUnmounted(() => {
  emitter.off(BUS_EVENTS.TOAST_MESSAGE_CREATED, onToastMessageCreated);
});
</script>

<style>
.toast-fade-enter-active {
  transition: all 0.3s var(--ease-in-sine);
}

.toast-fade-leave-active {
  transition: all 0.1s var(--ease-out-sine);
}

.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

<template>
  <transition-group name="toast-fade" tag="div"
    class="left-0 right-0 mx-auto max-w-[25rem] overflow-hidden absolute text-center top-4 z-50">
    <woot-snackbar v-for="snackMessage in snackMessages" :key="snackMessage.key" :message="snackMessage.message"
      :action="snackMessage.action" />
  </transition-group>
</template>
