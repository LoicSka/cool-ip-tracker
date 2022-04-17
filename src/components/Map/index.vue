<template>
  <div class="map-wrap">
    <IPForm
      :isDarkModeEnabled="isDarkModeEnabled"
      :onSetPinCoordinates="handleSetNewPinCoordinates"
    />
    <ModeSwitchToggle
      :onModeSwitch="handleModeSwitch"
      :isDarkModeEnabled="isDarkModeEnabled"
    />
    <MglMap
      :zoom="zoom"
      :center="coordinates"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      @load="onMapLoaded"
    >
      <MglMarker :coordinates="coordinates" color="#0C66EF" />
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
import ModeSwitchToggle from "./ModeSwitchToggle";
import IPForm from "../IPForm";

export default {
  components: {
    MglMap,
    ModeSwitchToggle,
    IPForm,
    MglMarker,
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoic2h4YWthIiwiYSI6ImNsMjBsYjN4bTB4aXYzYm1remJwYnh5bmkifQ.zoPS3LvQGuVOB9jNe4d2hg",
      isDarkModeEnabled: true,
      coordinates: [-2.24, 53.48],
      zoom: 15,
      flyTo: null,
    };
  },
  computed: {
    mapStyle: function () {
      return this.isDarkModeEnabled
        ? "mapbox://styles/mapbox/dark-v10"
        : "mapbox://styles/mapbox/streets-v11";
    },
  },
  created() {
    this.mapbox = Mapbox;
    console.log({ MglMap: Mapbox });
  },
  methods: {
    handleModeSwitch: function () {
      this.isDarkModeEnabled = !this.isDarkModeEnabled;
    },
    handleSetNewPinCoordinates: async function (long, lat) {
      // GlMap.actions.zoomTo(5, {duration: 2000})
      console.log("FLY", this.flyTo);
      this.coordinates = [long, lat];
      if (this.flyTo) {
        await this.flyTo({
          center: [long, lat],
          zoom: 9,
          speed: 1,
        });
      }
    },
    async onMapLoaded(event) {
      // in component
      // this.map = event.map;
      console.log("THEMAP", event.component.actions);
      this.flyTo = event.component.actions.flyTo;
    },
  },
};
</script>

<style scoped>
.map-wrap {
  height: 100vh;
  width: 100vw;
  position: relative;
}
#map {
  height: 100vh;
  width: 100vw;
  background: red;
}
</style>