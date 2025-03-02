<template>
    <div :class="$style.title_container">
      <p :class="$style.title">
        <a class="font-zenKurenaido" href="https://nashiusagi.github.io">NashiUsa Web</a>
      </p>
    </div>
</template>

<style lang="css" module>
.title_container {
  background-color: #000;
  padding: 8px 24px;
  width: 161px;
}

.title {
  font-size: 24px;
  margin: 0;
  font-family: "Tilt Warp", serif;

  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
