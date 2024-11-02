<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import ProfileCard from "@/components/organisms/ProfileCard.vue";
import HistoryCard from "@/components/organisms/HistoryCard.vue";
import SkillCard from "@/components/organisms/SkillCard.vue";
import CommitmentCard from "@/components/organisms/CommitmentCard.vue";
</script>

<template>
  <MainLayout>
    <div class="bg-white px-2 w-64">
      <h1 class="text-4xl text-sky-400 font-bold mb-6">
        <a class="font-zenKurenaido" href="https://nashiusagi.github.io">NashiUsa Web</a>
      </h1>
    </div>
    <div class="my-2">Hello there! I'm NashiUsagi!</div>
    <div class="text-gray-900 subpixel-antialiased">
      <ProfileCard />
      <HistoryCard />
      <SkillCard />
      <CommitmentCard />
    </div>
  </MainLayout>
</template>
