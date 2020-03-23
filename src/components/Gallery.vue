<template>
  <div id="gallery">
    <div class="column">
      <img v-for="(src, idx) in col1" :key="idx" :src="src" alt="this should be an image or gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in col2" :key="idx" :src="src" alt="this should be an image or gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in col3" :key="idx" :src="src" alt="this should be an image or gif" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  data: () => {
    return {
      imgs: [],
      col1: [],
      col2: [],
      col3: []
    };
  },

  beforeCreate() {
    fetch("https://7vhmrxsuy0.execute-api.eu-central-1.amazonaws.com/prod")
      .then(response => response.json())
      .then(data => {
        this.imgs = data.urls;

        for (let i = 0; i <= this.imgs.length; i++) {
          if (i % 3 == 0) {
            this.col1.push(this.imgs[i]);
          }
        }

        for (let i2 = 0; i2 <= this.imgs.length; i2++) {
          if (i2 % 3 == 0) {
            this.col2.push(this.imgs[i2 + 1]);
          }
        }

        for (let i3 = 0; i3 <= this.imgs.length; i3++) {
          if (i3 % 3 == 0) {
            this.col3.push(this.imgs[i3 + 2]);
          }
        }

        console.log(this.col1.length);
        console.log(this.col2.length);
        console.log(this.col3.length);
      });
  }
};
</script>

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
    width: 33.3%;
    display: flex;
    flex-direction: column;

    img {
      width: 98%;
      margin: 1%;
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