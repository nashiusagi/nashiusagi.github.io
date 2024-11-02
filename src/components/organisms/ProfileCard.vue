<script setup lang="ts">
import GlassCard from "@/components/molecules/GlassCard.vue";
import GithubButton from "vue-github-button";
import TwitterButton from "@/components/molecules/TwitterButton.vue";
</script>

<template>
  <GlassCard>
    <h2 class="text-2xl font-bold">Profile</h2>
    Social Medias <br />

    <TwitterButton
      username="NashiUsaBoy"
      link="https://twitter.com/NashiUsaBoy?ref_src=twsrc%5Etfw"
    />
    <github-button
      href="https://github.com/nashiusagi"
      data-size="large"
      aria-label="Follow @nashiusagi on GitHub"
      >Follow @nashiusagi
    </github-button>
    <br />
    <div>
      Handle: 梨兎 / nashiusagi / nashiusaboy

      <br />
      Real Name: Ryogo Ito / 伊藤諒悟<br />
    </div>
  </GlassCard>
</template>
