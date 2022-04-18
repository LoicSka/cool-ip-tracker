<template>
  <div class="location-panel-wrap">
    <div
      class="location-panel"
      :class="{ 'location-panel--dark': isDarkModeEnabled }"
    >
      here
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDarkModeEnabled: Boolean,
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
  bottom: 30px;
  z-index: 10;
  border: none;
  transition: transform 0.2s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
}
.location-panel {
  height: 100%;
  min-width: 210px;
  flex: 1;
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
@media (min-width: 640px) {
  .location-panel-wrap {
    width: 230px;
    min-width: 230px;
  }
}
</style>