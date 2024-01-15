<script setup>
defineProps({
  message: { type: String, default: '' },
  action: {
    type: Object,
    default: () => { },
  },
})
</script>
<template>
  <div
    class="shadow text-slate-100 bg-slate-1200 min-h-10 rounded-sm inline-flex mb-3 max-w-[25rem] min-w-[15rem] p-3 text-left">
    <div class="text-sm font-medium text-slate-100">
      {{ message }}
    </div>
    <div v-if="action" class="ml-auto pl-4">
      <router-link v-if="action.type == 'link'" :to="action.to">
        {{ action.message }}
      </router-link>
    </div>
  </div>
</template>
