<script setup lang="ts">
import ContributionSectionTitle from "@/components/atoms/ContributionSectionTitle.vue";
</script>

<template>
  <div :class="$style.carrier_contribution_container">
    <div>
      <ContributionSectionTitle :title="'Carrier'" />
    </div>
    <div :class="$style.carrier_contents_box">
      <ul :class="$style.content_list">
        <li>
          "エンジニアリングマネージャになってからチームの成果を最大化するために取り組んだこと", 
          年内さらに成長したい方へ！スキルアップ速度を加速させる取り組み発表会. 
          <a :class="$style.link" :href="'https://speakerdeck.com/nashiusagi/maximize-team-performance-as-em'">slide</a>
        </li>
        <li>
          "あれやってみてー駆動から成長を加速させる", 
          2024年を振り返ろう！若手エンジニアのための交流LTナイト. 
          <a :class="$style.link" :href="'https://speakerdeck.com/nashiusagi/areyattemite-driven'">slide</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" module>
.carrier_contribution_container {
  color: #fff;
  padding-bottom: 32px;
}

.carrier_contents_box {
  padding: 0 16px;
}

.content_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link {
  color: #fff;
  text-decoration: underline;
}
</style>
