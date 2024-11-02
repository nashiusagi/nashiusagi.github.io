<script setup>
import GlassCard from "@/components/molecules/GlassCard.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ProfileCard from "@/components/organisms/ProfileCard.vue";
import HistoryCard from "@/components/organisms/HistoryCard.vue";
import SkillCard from "@/components/organisms/SkillCard.vue";
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
      
    
      <GlassCard>
        <h2 class="text-2xl font-bold">Commitments</h2>
        <div class="ml-4">
          <h3 class="text-xl font-bold">
            International Conference (Reviewed)
          </h3>
          <ul class="list-disc ml-8 mb-4">
            <li>
              <a class="font-bold">Ryogo Ito</a>, Mitsuhiro
              Uchida, and Suguru Saito. Decision of Line Structure
              beyond Junctions Using U-Net-Based CNN for Line
              Drawing Rendering. SIGGRAPH Asia 2021 Posters. 2021.
            </li>
          </ul>
          <h3 class="text-xl font-bold">
              Domestic Conference (Reviewed)
          </h3>
          <ul class="list-disc ml-8 mb-4">
            <li>
              <a class="font-bold">伊藤 諒悟</a>, 齋藤 豪, 森合
              遼.
              疑似相対深度推定によるイラストへの重なりを考慮した差し込み.
              VC+VCC2022, 2022.
            </li>
          </ul>
          <h3 class="text-xl font-bold">
              Domestic Conference (UnReviewed)
          </h3>
          <ul class="list-disc ml-8 mb-4">
            <li>
              <a class="font-bold">伊藤 諒悟</a>, 齋藤 豪, 内田
              光洋.
              U-NetベースのCNNを用いた結節点における線分接続判定.
              VC+VCC2021ポスター. 2021.
            </li>
            <li>
              <a class="font-bold">伊藤 諒悟</a>, 齋藤 豪, 森合
              遼.
              線画像における相対深度グラフ作成手法とそれを用いた線画像の差し込み編集法.
              CGVI第189回研究発表会. 2023.
            </li>
            <li>
              <a class="font-bold">伊藤 諒悟</a>, 齋藤 豪, 森合
              遼.
              相対的深度情報グラフを用いた線画像の差し込み編集法.
              情報処理学会第85回全国大会. 2023. （学生奨励賞受賞）
            </li>
          </ul>
          <h3 class="text-xl font-bold">Journal Paper</h3>
          <ul class="list-disc ml-8 mb-4">
            <li>
              Dingkun Yan, <a class="font-bold">Ryogo Ito</a>, Ryo
              Moriai, and Suguru Saito. Two-step Training:
              Adjustable Sketch Colorization via Reference Image
              and Text Tag. Computer Graphics Forum. TBD.
            </li>
          </ul>
        </div>
      </GlassCard>
    </div>
  </MainLayout>
</template>
