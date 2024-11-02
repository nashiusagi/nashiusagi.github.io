<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import TitleBox from "@/components/atoms/TitleBox.vue";
import ProfileCard from "@/components/organisms/ProfileCard.vue";
import HistoryCard from "@/components/organisms/HistoryCard.vue";
import SkillCard from "@/components/organisms/SkillCard.vue";
import CommitmentCard from "@/components/organisms/CommitmentCard.vue";
</script>

<template>
  <MainLayout>
    <TitleBox />
    <div class="my-2">Hello there! I'm NashiUsagi!</div>
    <div class="text-gray-900 subpixel-antialiased">
      <ProfileCard />
      <HistoryCard />
      <SkillCard />
      <CommitmentCard />
    </div>
  </MainLayout>
</template>
