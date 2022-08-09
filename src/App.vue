<template>

  <div>
    <Base />
    <router-view />
  </div>
</template>

<script>
import Base from "./components/Base.vue";

export default {
  name: "Home",
  components: {
    Base
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to right, #000355, #000);
}
</style>
