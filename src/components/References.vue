<template>
  <div id="body">
    <Header />
    <div id="refcontainer">
      <span v-for="(e, idx) in RefData" :key="idx">{{e.date +'-' + e.location +'/'+ e.work}}</span>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import RefData from "../assets/referenceassets/references.json";

export default {
  name: "References",
  data: function() {
    return {
      RefData
    };
  },
  components: {
    Header
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

#refcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3vw;
}

@media all and (orientation: portrait) {
  #body {
    width: 100%;
    align-items: center;
  }

  #refcontainer {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.8em;
    margin-top: 5%;
    margin-bottom: 20%;
  }

  span {
    width: 100%;
    text-align: center;
    margin: 2%;
  }
}
</style>