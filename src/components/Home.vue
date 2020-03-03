<template>
  <div id="body">
    <Header />
    <Instagram />
    <Gallery />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Instagram from "./Instagram.vue";
import Gallery from "./Gallery.vue";
import RefData from "../assets/referenceassets/references.json";

export default {
  name: "Home",
  props: [],
  components: {
    Header,
    Instagram,
    Gallery
  },
  data() {
    return {
      RefData
    };
  }
};
</script>

<style scoped>
#body {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
