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
}

.title {
  font-size: 24px;
  margin: 0;
  font-family: 'Rammetto One', serif;

  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
