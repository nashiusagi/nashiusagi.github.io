<template>
  <div :class="$style.skill_container">
    <div>
      <p :class="$style.skill_cap_label">
        ★★★ Love
      </p>
      <div :class="$style.icons_box">
        <div>
          <img :src="'./src/assets/python.jpeg'" />
        </div>
        <div>
          <img :src="'./src/assets/typescript.png'" />
        </div>
        <div>
          <img :src="'./src/assets/vue.png'" />
        </div>
        <div>
          <img :src="'./src/assets/ubuntu.png'" />
        </div>
      </div>
    </div>
    <div>
      <p :class="$style.skill_cap_label">
        ★★ Daily Use
      </p>
      <div :class="$style.icons_box">
        <div>
          <img :src="'./src/assets/java.png'" />
        </div>
        <div>
          <img :src="'./src/assets/scala.png'" />
        </div>
        <div>
          <img :src="'./src/assets/golang.png'" />
        </div>
        <div>
          <img :src="'./src/assets/javascript.png'" />
        </div>
        <div>
          <img :src="'./src/assets/macos.png'" />
        </div>
        <div>
          <img :src="'./src/assets/aws.png'" />
        </div>
      </div>
    </div>
    <div>
      <p :class="$style.skill_cap_label">
        ★ Can Use
      </p>
      <div :class="$style.icons_box">
        <div>
          <img :src="'./src/assets/perl.png'" />
        </div>
        <div>
          <img :src="'./src/assets/php.png'" />
        </div>
        <div>
          <img :src="'./src/assets/cpp.png'" />
        </div>
        <div>
          <img :src="'./src/assets/react.png'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" module>
.skill_container {
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  color: #fff;
}

.skill_cap_label {
  padding: 8px;
  margin: 0;
  text-align: center;
  
  font-size: 20px;
  font-weight: bold;
}

.icons_box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 84px;
    border-radius: 4px;
  }
}

</style>
