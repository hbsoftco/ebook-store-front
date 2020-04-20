<template>
  <div id="app">
    <div class="main-container">
      <AppHeader />
      <AppMain />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppMain from "./components/AppMain";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppMain
  }
};
</script>

<style></style>
