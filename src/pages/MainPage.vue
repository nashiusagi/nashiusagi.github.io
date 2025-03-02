<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import TitleBox from "@/components/atoms/TitleBox.vue";
import ProfileCard from "@/components/organisms/ProfileCard.vue";
import SkillCard from "@/components/organisms/SkillCard.vue";
import CommitmentCard from "@/components/organisms/CommitmentCard.vue";
import DefaultTitle from "@/components/organisms/DefaultTitle.vue";
import MessageBox from "@/components/organisms/MessageBox.vue";
import ProfileImageContainer from "@/components/organisms/profile/ProfileImageContainer.vue";
import ProfileNameContainer from "@/components/organisms/profile/ProfileNameContainer.vue";
import ProfileBodyContainer from "@/components/organisms/profile/ProfileBodyContainer.vue";
import WorkExperienceTimeline from "@/components/organisms/history/WorkExperienceTimeline.vue";
import AcademicBackgroundContainer from "@/components/organisms/history/AcademicBackgroundContainer.vue";
import WorkExperienceContainer from "@/components/organisms/history/WorkExperienceContainer.vue";
</script>

<template>
  <MainLayout>
    <div>
      <div :class="$style.section">
        <div>
          <TitleBox />
          <MessageBox />
        </div>
        <div :class="$style.container" >
          <DefaultTitle :title="'PROFILE'"/>
          <ProfileImageContainer />
          <ProfileNameContainer />
          <ProfileBodyContainer />
        </div>
      </div>
      <div :class="$style.section">
        <div :class="$style.container">
          <DefaultTitle :title="'HISTORY'"/>
          <WorkExperienceContainer />
          <AcademicBackgroundContainer />
        </div>
      </div>
    </div>
    <div class="text-gray-900 subpixel-antialiased">
      <ProfileCard />
      <SkillCard />
      <CommitmentCard />
    </div>
  </MainLayout>
</template>

<style lang="css" module>
.section {
  height: 100vh;
}

.container {
  padding: 8px;
}
</style>
