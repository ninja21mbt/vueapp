<template>
  <div>
    <div id="box1">
      <router-link to="/work" id="linkfield">
        <img src="../assets/startassets/lexspace.gif" />
      </router-link>
    </div>
    <div id="box2"></div>
  </div>
</template>

<script>
export default {
  name: "Start"
};
</script>

<style scoped>
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
}


#box1:hover {
  filter: invert(100%);
  transition-duration: 0.3s;
}

/* middle part, clickable */
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
}

#linkfield img {
  width: 130%;
}

/* bottom Background image */
#box2 {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/startassets/startimg2.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

#box2:hover {
  filter: invert(100%);
  transition-duration: 0.3s;
  cursor: pointer;
}
</style>
