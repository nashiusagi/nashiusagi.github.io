<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import TitleBox from "@/components/atoms/TitleBox.vue";
import ProfileCard from "@/components/organisms/ProfileCard.vue";
import HistoryCard from "@/components/organisms/HistoryCard.vue";
import SkillCard from "@/components/organisms/SkillCard.vue";
import CommitmentCard from "@/components/organisms/CommitmentCard.vue";
import DefaultTitle from "@/components/organisms/DefaultTitle.vue";
import MessageBox from "@/components/organisms/MessageBox.vue";
import ProfileImageContainer from "@/components/organisms/profile/ProfileImageContainer.vue";
import ProfileNameContainer from "@/components/organisms/profile/ProfileNameContainer.vue";
import ProfileBodyContainer from "@/components/organisms/profile/ProfileBodyContainer.vue";
</script>

<template>
  <MainLayout>
    <div>
      <div>
        <TitleBox />
        <MessageBox />
      </div>
      <div :class="$style.profile_container">
        <DefaultTitle :title="'PROFILE'"/>
        <ProfileImageContainer />
        <ProfileNameContainer />
        <ProfileBodyContainer />
      </div>
    </div>
    <div class="text-gray-900 subpixel-antialiased">
      <ProfileCard />
      <HistoryCard />
      <SkillCard />
      <CommitmentCard />
    </div>
  </MainLayout>
</template>

<style lang="css" module>
.profile_container {
  padding: 8px;
}
</style>
