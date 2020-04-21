<template>
  <div id="app">
    <div class="main-container">
      <AppHeader />
	  <router-view/>
      <!-- <Home /> -->
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Home from "./views/Home";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    Home
  },
  mounted() {}
};
</script>

<style></style>
