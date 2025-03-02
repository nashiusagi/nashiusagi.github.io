<template>
  <div :class="$style.img_container">
    <div>
      <img :src="'/nashiusagi.jpeg'" />
    </div>
    <div>
      <img :src="'/logo.png'" />
    </div>
  </div>
</template>

<style lang="css" module>
.img_container {
  display: flex;
  gap: 12px;
  padding: 24px;
  justify-content: center;

  img {
    width: 150px;
  }
}
</style>
