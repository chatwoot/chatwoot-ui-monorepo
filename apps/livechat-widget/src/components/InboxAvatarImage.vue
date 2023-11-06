<template>
  <img
    v-if="!hasImageLoadError"
    :src="avatarUrl"
    alt="avatar"
    @error="onImageLoadError"
  />
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      required:true
    }
  },
  data() {
    return { hasImageLoadError: false };
  },
  methods: {
    onImageLoadError() {
      this.hasImageLoadError = true
    }
  },
}
</script>
