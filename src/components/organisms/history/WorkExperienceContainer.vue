<script setup lang="ts">
import HistorySectionTitle from "@/components/atoms/HistorySectionTitle.vue";
import WorkExperienceTimeline from "./WorkExperienceTimeline.vue";
</script>

<template>
  <div>
    <div>
      <HistorySectionTitle :title="'Work Experience'" />
      <WorkExperienceTimeline />
    </div>
  </div>
</template>
