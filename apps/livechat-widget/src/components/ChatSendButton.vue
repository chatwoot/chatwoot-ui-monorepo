<template>
  <button
    type="submit"
    :disabled="disabled"
    class="icon-button flex items-center justify-center ml-1"
    @click="onClick"
  >
    <fluent-icon v-if="!loading" icon="send" :style="`color: ${color}`" />
    <spinner v-else size="small" />
  </button>
</template>

<script>
import Spinner from '@chatwoot/shared/components/Spinner.vue';
import FluentIcon from '@chatwoot/shared/components/FluentIcon/Index.vue';

export default {
  components: {
    FluentIcon,
    Spinner,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    color: {
      type: String,
      default: '#6e6f73',
    },
  },
};
</script>
