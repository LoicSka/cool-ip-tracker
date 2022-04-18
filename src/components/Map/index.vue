<template>
  <div class="map-wrap">
    <IPForm
      :isDarkModeEnabled="isDarkModeEnabled"
      :onSetLocationData="handleSetLocationData"
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
      <MglMarker :coordinates="coordinates" color="#0C66EF">
        <!-- <MglPopup
          :offset="20"
          :coordinates="coordinates"
          anchor="bottom"
        >
          <div>{{pinLocation.city}}</div>
        </MglPopup> -->
      </MglMarker>
    </MglMap>
    <CurrentLocationPanel :isDarkModeEnabled="isDarkModeEnabled" />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import ModeSwitchToggle from "./ModeSwitchToggle";
import CurrentLocationPanel from "./CurrentLocationPanel";
import IPForm from "../IPForm";

export default {
  components: {
    MglMap,
    ModeSwitchToggle,
    IPForm,
    MglMarker,
    MglPopup,
    CurrentLocationPanel,
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoic2h4YWthIiwiYSI6ImNsMjBsYjN4bTB4aXYzYm1remJwYnh5bmkifQ.zoPS3LvQGuVOB9jNe4d2hg",
      isDarkModeEnabled: true,
      coordinates: [-2.24, 53.48],
      pinLocation: null,
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
  },
  methods: {
    handleModeSwitch: function () {
      this.isDarkModeEnabled = !this.isDarkModeEnabled;
    },
    handleSetLocationData: async function ({ longitude, latitude, ...data }) {
      this.coordinates = [longitude, latitude];
      this.pinLocation = { longitude, latitude, ...data };
      if (this.flyTo) {
        await this.flyTo({
          center: [longitude, latitude],
          zoom: 9,
          speed: 10,
        });
      }
    },
    onMapLoaded: async function (event) {
      this.flyTo = event.component.actions.flyTo;
      await this.flyTo({
        center: this.coordinates,
        zoom: 9,
        speed: 10,
      });
    },
    setPinLocationData: async function (locationData) {
      this.pinLocation = locationData;
    },
    setCurrentLocationData: async function (locationData) {
      this.currentLocation = locationData;
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
}
</style>