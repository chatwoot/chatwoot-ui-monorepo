<template>
  <div class="user-avatar" :class="size" :style="getBgImage" />
</template>
<script>
/**
 * Thumbnail Component
 * Src - source for round image
 */
export default {
  name: 'UserAvatar',
  props: {
    src: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    getBgImage() {
      if (this.src) return { 'background-image': `url(${this.src})` };
      return {};
    },
  },
};
</script>

<style scoped lang="scss">
@import 'widget/assets/scss/_variables.scss';
@import 'widget/assets/scss/_mixins.scss';

.user-avatar {
  @include light-shadow;
  background: url('widget/assets/images/defaultUser.png') center center
    no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 40px;
  width: 40px;

  &.small {
    width: $space-medium;
    height: $space-medium;
  }
}
</style>
