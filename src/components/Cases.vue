<template>
  <div id="body">
    <Header />
    
    <div id="wrapper">
        <div class="case">
        </div>
        <div class="case">
        </div>
        <div class="case">
        </div>
        <div class="case">
        </div>
        <div class="case">
        </div>
        <div class="case">
        </div>
        <div class="case">
        </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "cases",
  props: [],
  components: {
    Header,
    
  },
  data() {
    return {
     
    };
  }
};
</script>

<style lang="scss" scoped>
#body {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header{
    z-index: 100;
  }

  #wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap:wrap;
    width: 90%;
    margin-top: 5em;
    z-index: 50;

    .case{
      background-color: white;
      margin: 15px;
      min-width: 300px;
      min-height: 300px;
      opacity: 60%;
      background-image: radial-gradient(circle at 50%,#178969,#147459,#0D4B3A, #072920, #020E0B);
      border-radius: 15px;
      box-shadow:     
        inset -10px -10px 25px #0B0C0E,
        inset 10px 10px 25px #0B0C0E;
        &:hover{
          cursor: pointer;
          opacity: 100%;
          transition-duration: 0.1s;
        }
    }
  }
}
</style>