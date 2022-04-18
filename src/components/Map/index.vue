<template>
  <div class="map-wrap">
    <IPForm
      :isDarkModeEnabled="isDarkModeEnabled"
      :onSetLocationData="handleSetLocationData"
      :onModeSwitch="handleModeSwitch"
    />
    <div class="mode-switch-wrap">
      <ModeSwitchToggle
        :onModeSwitch="handleModeSwitch"
        :isDarkModeEnabled="isDarkModeEnabled"
      />
    </div>
    <MglMap
      :zoom="zoom"
      :center="coordinates"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      @load="onMapLoaded"
    >
      <MglMarker :coordinates="coordinates" color="#0C66EF">
        <MglPopup :offset="20" :coordinates="coordinates" anchor="bottom">
          <div>{{ currentLocation.city + ", " + currentLocation.country }}</div>
        </MglPopup>
      </MglMarker>
    </MglMap>
    <CurrentLocationPanel
      :city="currentLocation.city"
      :country="currentLocation.country"
      :stateProvince="currentLocation.stateProvince"
      :ip="currentLocation.ip"
      :isDarkModeEnabled="isDarkModeEnabled"
      :isVisible="isLocationPanelVisible"
    />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import ModeSwitchToggle from "./ModeSwitchToggle";
import CurrentLocationPanel from "./CurrentLocationPanel";
import IPForm from "../IPForm";
import isEmpty from "lodash/isEmpty";

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
    isLocationPanelVisible: function () {
      return !isEmpty(this.pinLocation);
    },
    currentLocation: function () {
      return {
        city: this.pinLocation?.city,
        country: this.pinLocation?.country_name,
        stateProvince: this.pinLocation?.state_prov,
        ip: this.pinLocation?.ip,
      };
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
      console.log({ he: this.pinLocation });
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
  },
};
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100vw;
}
.map-wrap {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.mode-switch-wrap {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  display: none;
}
@media (min-width: 640px) {
  .mode-switch-wrap {
    display: block;
  }
}
</style>