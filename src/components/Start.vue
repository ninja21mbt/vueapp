<template>
  <div id="body">
    <div id="box1" ref="box">
      <router-link to="/work" id="linkfield">
        <img
          src="../assets/startassets/lexspace.gif"
          v-on:mouseover="removeFilter"
          v-on:mouseout="addFilter"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",

  methods: {
    removeFilter: function(event) {
      if (event) {
        let el = this.$refs.box;
        el.style.setProperty("filter", "none");
      }
    },
    addFilter: function(event) {
      if (event) {
        let el = this.$refs.box;
        el.style.setProperty("filter", "invert(100%)");
      }
    }
  }
};
</script>

<style lang='scss' scoped>
/* first background image */
#box1 {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/startassets/startimg1.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: invert(100%);
    transition-duration: 0.3s;
  }

  /* middle part */
  #linkfield {
    width: 36%;
    height: 60%;
    margin-top: 10%;
    margin-left: 4%;
    cursor: pointer;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    /* middle part, clickable */
    img {
      width: 130%;
    }
  }
}

@media only screen and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  #box1 {
    background-size: cover;
    background-attachment: initial;
    height: 100vh;

    #linkfield {
      width: 90%;
      height: 60%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
