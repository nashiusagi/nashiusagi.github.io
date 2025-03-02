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
import DarkModeTitle from "@/components/organisms/DarkModeTitle.vue";
import AcademicContributionContainer from "@/components/organisms/contribution/AcademicContributionContainer.vue";
import CarrierContributionContainer from "@/components/organisms/contribution/CarrierContributionContainer.vue";
import SkillContainer from "@/components/organisms/skill/SkillContainer.vue";
</script>

<template>
  <MainLayout>
    <div>
      <div :class="$style.section">
        <div :class="$style.title_container">
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
      <div :class="[$style.section, $style.section_black]">
        <div :class="$style.container">
          <DarkModeTitle :title="'PROGRAMMING SKILLS'" />
          <SkillContainer />
        </div>
      </div>
      <div :class="$style.section_black">
        <div :class="$style.container">
          <DarkModeTitle :title="'CONTRIBUTIONS'" />
          <CarrierContributionContainer />
          <AcademicContributionContainer />
        </div>
      </div>
      <div :class="$style.footer">
        <p :class="$style.footer_text"> -- EOF --</p>
      </div>
    </div>
  </MainLayout>
</template>

<style lang="css" module>
.section {
  height: 100vh;
  width: 100vw;
}

.title_container {
  padding: 0 8px;
  padding-top: 8px;
}

.section_black {
  background-color: #000;
}

.container {
  padding: 16px 8px 8px 8px;
}

.footer {
  height: 64px;
}

.footer_text {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
