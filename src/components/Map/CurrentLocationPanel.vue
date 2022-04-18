<template>
  <div
    class="location-panel-wrap"
    :class="{
      'location-panel--visible': isVisible,
    }"
  >
    <div
      class="location-panel"
      :class="{
        'location-panel--dark': isDarkModeEnabled,
      }"
    >
      <div class="location-panel__inner">
        <div class="inner-header">
          <span class="location-panel__title-text">Address location</span>
        </div>
        <div class="inner-text-wrap">
          <div class="label-text">Address</div>
          <div class="value-text">{{ ip }}</div>
        </div>
        <div class="inner-text-wrap">
          <div class="label-text">City</div>
          <div class="value-text">{{ city }}</div>
        </div>
        <div class="inner-text-wrap">
          <div class="label-text">Country</div>
          <div class="value-text">{{ country }}</div>
        </div>
        <div class="inner-text-wrap">
          <div class="label-text">State/Province</div>
          <div class="value-text">{{ stateProvince }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDarkModeEnabled: Boolean,
    isVisible: Boolean,
    city: String,
    country: String,
    stateProvince: String,
    ip: String,
  },
};
</script>

<style scoped>
.location-panel-wrap {
  width: 100%;
  height: 195px;
  min-width: 100%;
  min-height: 195px;
  /* background: white; */
  position: absolute;
  bottom: 20px;
  z-index: 10;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s;
  transform: translateY(400px);
}
.location-panel {
  height: 100%;
  min-width: 210px;
  width: calc(100% - 40px);
  border-radius: 9px;
  background: white;
  box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.25);
  border: 1px solid white;
  outline: none;
  border: none;
}
.location-panel__inner {
  padding: 15px 20px;
}
.inner-header {
  margin-bottom: 5px;
}
.location-panel__title-text {
  font-size: 1.3rem;
  font-weight: 500;
  color: #1B2533;
}
.location-panel--dark {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(74, 78, 83, 0.5);
  box-shadow: none;
}
.location-panel--visible {
  transform: translateY(0);
}
.inner-text-wrap {
  width: calc(100% - 10px);
  display: flex;
  justify-content: space-between;
  padding: 6px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.label-text {
  color: #414F64;
}
.value-text {
  color: #1B2533;
}
.location-panel--dark .location-panel__title-text,
.location-panel--dark .value-text {
  color: white;
}
.location-panel--dark .label-text {
  color: white;
}

.location-panel--dark .inner-text-wrap {
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.inner-text-wrap:last-child {
  border-bottom: none;
}
@media (min-width: 640px) {
  .location-panel-wrap {
    width: 360px;
    min-width: 360px;
    padding: 0 30px;
  }
}
</style>