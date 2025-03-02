<template>
  <component is="style">
    .timeline::before {
      position: absolute;
      width: 4px;
      height: 130%;
      top: -24px;
      margin-left: 32px;
      background-color: #000;
      content: ""
    }
  </component>
  <div class="timeline">
    <div :class="$style.timeline_block">
      <div :class="$style.timeline_main_icon">
      </div>
      <div :class="$style.timeline_content_main">
        <p :class="$style.timeline_content_message">
          2023.04 - | 株式会社 ADWAYS DEEE
        </p>
      </div>
    </div>
    <div :class="$style.timeline_block">
      <div :class="$style.timeline_sub_icon">
      </div>
      <div :class="$style.timeline_content">
        <p>
          2024.02 | MVPベストルーキー賞受賞
        </p>
      </div>
    </div>
    <div :class="$style.timeline_block">
      <div :class="$style.timeline_sub_icon">
      </div>
      <div :class="$style.timeline_content">
        <p>
          2024.07 | EMに転身
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.timeline {
  position: relative;
}
</style>

<style lang="css" module>
.timeline_main_icon {
  position: absolute;
  width: 16px;
  height: 16px;
  margin-left: 22px;
  border: 4px solid #000;
  border-radius: 100%;
  background-color: #000;
  text-align: center;
}

.timeline_sub_icon {
  position: absolute;
  width: 16px;
  height: 16px;
  margin-left: 22px;
  border: 4px solid #000;
  border-radius: 100%;
  background-color: #fff;
  text-align: center;
}

.timeline_block {
  margin-left: 10%;
  margin: 60px 0;
}

.timeline_content {
  position: relative;
  left: 30px;
  padding: 0 0 0 24px;

  p {
    margin: 0;
    font-size: 14px;
  }
}

.timeline_content_main {
  position: relative;
  left: 30px;
  padding: 0 0 0 24px;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
