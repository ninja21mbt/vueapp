<template>
  <div id="body">
    <Header />
    <Gallery/>
    motion
  </div>
</template>

<script>
import Header from "./Header.vue";
import Gallery from "./Gallery.vue";

export default {
  name: "visual",
  props: [],
  components: {
    Header,
    Gallery
  },
  data() {
    return {
     
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