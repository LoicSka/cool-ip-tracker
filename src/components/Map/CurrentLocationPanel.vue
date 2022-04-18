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
      here
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
  height: 150px;
  min-width: 100%;
  min-height: 150px;
  /* background: white; */
  position: absolute;
  bottom: 20px;
  z-index: 10;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  transition: transform 0.2s ease-in;
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
.location-panel__title-text {
  font-size: 1rem;
  color: white;
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
@media (min-width: 640px) {
  .location-panel-wrap {
    width: 230px;
    min-width: 230px;
    padding: 0 30px;
  }
}
</style>