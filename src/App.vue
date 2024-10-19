<template>
  <Nav></Nav>
  <router-view />
</template>

<script>
import "./style.css";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style scoped lang="less"></style>
