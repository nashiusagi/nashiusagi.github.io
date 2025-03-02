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
    <div>
      <TitleBox />
      <div :class="$style.message_box">
        <p>
          Hello there!
        </p>
        <p>
          I'm NashiUsagi!
        </p>
      </div>
    </div>
    <div :class="$style.profile_container">
      <div :class="$style.profile_title">
        <p>
          PROFILE
        </p>
      </div>
      <div :class="$style.img_container">
          <div>
            <img :src="'./src/assets/nashiusagi.jpeg'" />
          </div>
          <div>
            <img :src="'./src/assets/logo.png'" />
          </div>
      </div>
      <div :class="$style.name_container">
        <p>
          梨兎 / NashiUsagi / なしうさ
        </p>
        <p>
          伊藤 諒悟 / ITO Ryogo
        </p>
      </div>
      <div :class="$style.profile">
        <p>
          エンジニアリングマネージャー
        </p>
        <p>
          時々
        </p>
        <p>
          エンジニア
        </p>
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
.message_box {
  padding: 32px;
  text-align: center;

  p {
    margin: 0;

    font-size: 16px;
    font-weight: bold;
  }
}

.profile_container {
  padding: 8px;
}

.profile_title {
  border: double 10px #000;
  padding: 8px;

  p {
    margin: 0;
    text-align: center;

    font-size: 20px;
    font-weight: bold;
  }
}

.img_container {
  display: flex;
  gap: 12px;
  padding: 24px;
  justify-content: center;

  img {
    width: 150px;
  }
}

.name_container {
  text-align: center;

  p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
}

.profile {
  text-align: center;
  padding: 32px;

  p {
    margin: 4px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
