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
      <img v-for="(src, idx) in Sources" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
      <img src="../assets/homeassets/homecontent/97nike.gif" />
       <img src="../assets/homeassets/homecontent/97nike.gif" />
    </div>
  </div>
</template>

<script>
import Sources from "../assets/homeassets/homesrc.json";

export default {
  name: "Gallery",
  data: () => {
    return {
      // srcPath: require('@/assets/homeassets/homecontent/'),
      Sources
    };
  }
};
</script>

<style scoped>
h1 {
  color: white;
}

#gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px;
}

.column {
  width: 25%;
  display: flex;
  flex-direction: column;
}

img{
  width: 100%;
}
</style>
