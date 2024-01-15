<script setup>
import SnackbarItem from './SnackBarItem.vue'
</script>
<template>
  <Story title="Snackbar Item">
    <Variant title="Default Snackbar">
      <SnackbarItem message="Oops! We couldn't find the email address. Please try again." />
    </Variant>
    <Variant title="Snackbar with action">
      <SnackbarItem message="Oops! We couldn't find the email address. Please try again."
        :action="{ type: 'link', to: 'dashboard', message: 'Try again' }" />
    </Variant>
  </Story>
</template>

<docs lang="md">
# My documentation

Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
