<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div>
    <p :class="$style.history_section_title">
      {{ title }} 
    </p>
    </div>
</template>

<style lang="css" module>
.history_section_title {
  text-align: center;
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
}
</style>
