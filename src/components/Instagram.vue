<template>
  <div id="body">
    <iframe
      src="https://cdn.lightwidget.com/widgets/3ce75944603b55e5b619e514551f32f3.html"
      scrolling="no"
      allowtransparency="true"
      class="lightwidget-widget"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Instagram",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
#body {
  width: 98%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}

iframe {
  width: 100%;
  border: 0;
  overflow: hidden;
  /* border: 4px solid #fff;
  padding: 0.7%; */
}

/* iframe:hover {
  border-color: darkgray;
  transition-duration: 0.5s;
} */
</style>
