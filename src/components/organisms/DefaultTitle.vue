<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div :class="$style.title">
    <p>
      {{ title }}
    </p>
  </div>
</template>

<style lang="css" module>
.title {
  border: double 10px #000;
  padding: 8px;

  p {
    margin: 0;
    text-align: center;

    font-size: 20px;
    font-weight: bold;
  }
}
</style>
