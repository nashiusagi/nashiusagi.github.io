<script setup lang="ts">
import HistorySectionTitle from "@/components/atoms/HistorySectionTitle.vue";
</script>

<template>
  <div>
    <div>
      <HistorySectionTitle :title="'Academic Background'" />
    </div>
    <div :class="$style.academic_background_container">
      <div>
        <p :class="$style.school_name">
          東京工業大学大学院 | 2021 - 2023
        </p>
        <div :class="$style.school_details">
          <p>
            東京工業大学院（現 東京科学大学大学院）
          </p>
          <p>
            情報理工学院
            情報工学系
            知能情報コース
          </p>
          <p>
            齋藤研究室
          </p>
        </div>
      </div>
      <div>
        <p :class="$style.school_name">
          早稲田大学 | 2017 - 2021
        </p>
        <div :class="$style.school_details">
          <p>
            早稲田大学
          </p>
          <p>
            基幹理工学部
            情報理工学科
          </p>
          <p>
            石川研究室
          </p>
        </div>
      </div>
      <div>
        <p :class="$style.school_name">
          逗子開成高等学校 | 2013 - 2016
        </p>
        <div :class="$style.school_details">
          <p>
            逗子開成高等学校
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" module>
.history_section_title {
  text-align: center;
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
}

.academic_background_container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.school_name {
  margin: 0;

  font-size: 16px;
  font-weight: bold;
  color: #000;
}

.school_details {
  padding: 8px;

  p {
    margin: 4px;

    font-size: 14px;
    font-weight: 400;
    color: #000;
  }
}
</style>
