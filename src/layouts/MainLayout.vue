<script setup>
</script>
<template>
  <div :class="$style.main">
    <div class="w-full overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<style lang="css" module>
.main {
  padding: 16px;
}
</style>
