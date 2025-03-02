<script setup lang="ts">
import ContributionSectionTitle from "@/components/atoms/ContributionSectionTitle.vue";
</script>

<template>
  <div :class="$style.academic_contribution_container">
    <div>
      <ContributionSectionTitle :title="'Academic'" />
    </div>
    <div :class="$style.academic_contents_box">
      <p :class="$style.content_title">
        International Conference (Reviewed)
      </p>
      <ul :class="$style.content_list">
        <li>
          <span :class="$style.bold_text">Ryogo Ito</span>, Mitsuhiro Uchida, and Suguru Saito. 
          Decision of Line Structure beyond Junctions Using U-Net-Based CNN for Line Drawing Rendering. 
          SIGGRAPH Asia 2021 Posters. 2021.
        </li>
      </ul>
      <p :class="$style.content_title">
          Domestic Conference (Reviewed)
      </p>
      <ul :class="$style.content_list">
        <li>
          <span :class="$style.bold_text">伊藤 諒悟</span>, 齋藤 豪, 森合 遼.
          疑似相対深度推定によるイラストへの重なりを考慮した差し込み.
          VC+VCC2022, 2022.
        </li>
      </ul>
      <p :class="$style.content_title">
          Domestic Conference (UnReviewed)
      </p>
      <ul :class="$style.content_list">
        <li>
          <span :class="$style.bold_text">伊藤 諒悟</span>, 齋藤 豪, 内田 光洋.
          U-NetベースのCNNを用いた結節点における線分接続判定.
          VC+VCC2021ポスター. 2021.
        </li>
        <li>
          <span :class="$style.bold_text">伊藤 諒悟</span>, 齋藤 豪, 森合 遼.
          線画像における相対深度グラフ作成手法とそれを用いた線画像の差し込み編集法.
          CGVI第189回研究発表会. 2023.
        </li>
        <li>
          <span :class="$style.bold_text">伊藤 諒悟</span>, 齋藤 豪, 森合 遼.
          相対的深度情報グラフを用いた線画像の差し込み編集法.
          情報処理学会第85回全国大会. 2023. （学生奨励賞受賞）
        </li>
      </ul>
      <p :class="$style.content_title">Journal Paper</p>
      <ul :class="$style.content_list">
        <li>
          Dingkun Yan, <span :class="$style.bold_text">Ryogo Ito</span>, Ryo Moriai, and Suguru Saito. 
          Two-step Training: Adjustable Sketch Colorization via Reference Image and Text Tag. 
          Computer Graphics Forum. 2023.
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" module>
.academic_contribution_container {
  color: #fff;
  padding-bottom: 32px;
}

.academic_contents_box {
  padding: 0 16px;
}

.bold_text {
  font-weight: bold;
}

.content_title {
  font-size: 18px;
  font-weight: bold;
}

.content_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
