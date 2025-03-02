<template>
  <div :class="$style.skill_container">
    <div>
      <p :class="$style.skill_cap_label">
        ★★★ Love
      </p>
      <div :class="$style.icons_box">
        <div>
          <img :src="'/python.jpeg'" />
        </div>
        <div>
          <img :src="'/typescript.png'" />
        </div>
        <div>
          <img :src="'/vue.png'" />
        </div>
        <div>
          <img :src="'/ubuntu.png'" />
        </div>
      </div>
    </div>
    <div>
      <p :class="$style.skill_cap_label">
        ★★ Daily Use
      </p>
      <div :class="$style.icons_box">
        <div>
          <img :src="'/java.png'" />
        </div>
        <div>
          <img :src="'/scala.png'" />
        </div>
        <div>
          <img :src="'/golang.png'" />
        </div>
        <div>
          <img :src="'/javascript.png'" />
        </div>
        <div>
          <img :src="'/macos.png'" />
        </div>
        <div>
          <img :src="'/aws.png'" />
        </div>
      </div>
    </div>
    <div>
      <p :class="$style.skill_cap_label">
        ★ Can Use
      </p>
      <div :class="$style.icons_box">
        <div>
          <img :src="'/perl.png'" />
        </div>
        <div>
          <img :src="'/php.png'" />
        </div>
        <div>
          <img :src="'/cpp.png'" />
        </div>
        <div>
          <img :src="'/react.png'" />
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
