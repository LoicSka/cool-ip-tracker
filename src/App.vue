<template>
  <div id="app">
    <Map />
  </div>
</template>

<script>
import Map from "./components/Map";

export default {
  name: "App",
  components: {
    Map,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
}
</style>
