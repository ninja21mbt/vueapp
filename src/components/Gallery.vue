<template>
  <div id="gallery">
    <div class="column">
      <img
        src="../assets/homeassets/homecontent/52f2de_624c180b79da4b34b8a41cf255e93d2e_mv2_d_3454_5181_s_4_2.webp"
      />
    </div>
    <div class="column">
      <img src="../assets/homeassets/homecontent/97nike.gif" />
      <img src="../assets/homeassets/homecontent/97nike.gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in imgs" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
      <img src="../assets/homeassets/homecontent/97nike.gif" />
      <img src="../assets/homeassets/homecontent/97nike.gif" />
    </div>
  </div>
</template>

<!-- <script> -->

// export default {
//   name: "Gallery",
//   data: () => {
//     fetch(
//       `https://7vhmrxsuy0.execute-api.eu-central-1.amazonaws.com/prod`
//     ).then((resp) => {

//     })
//     let imgs = await response.json();
//     return imgs;
//   },
//   mounted () {
//     fetch(
//       "https://7vhmrxsuy0.execute-api.eu-central-1.amazonaws.com/prod"
//     ).then(
//       response => {this.results = response.data.json()}
//     ).then(
//       return 
//     )
//   }
//   }
// };
<!-- </script> -->

<style lang='scss' scoped>
h1 {
  color: white;
}

#gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px;

  .column {
    width: 25%;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      animation-iteration-count: infinite;
    }
  }
}

@media only screen and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  #gallery {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    padding: 5px;

    .column {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>