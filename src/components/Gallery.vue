<template>
  <div id="gallery">
    <div class="column">
      <img v-for="(src, idx) in col1" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in col2" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in col3" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in col4" :key="idx" :src="src" alt="image or gif" />
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
      col3: [],
      col4: []
    };
  },

  beforeCreate() {
    fetch("https://7vhmrxsuy0.execute-api.eu-central-1.amazonaws.com/prod")
      .then(response => response.json())
      .then(data => {
        this.imgs = data.urls;

        var maxVal = 5;
        var delta = Math.floor(this.imgs.length / maxVal);

        for (var i = 0; i < this.imgs.length; i = i + delta) {
          this.col1.push(this.imgs[i]);
        }

        for (var i2 = 1; i2 < this.imgs.length; i2 = i2 + delta) {
          this.col2.push(this.imgs[i2]);
        }

        for (var i3 = 2; i3 < this.imgs.length; i3 = i3 + delta) {
          this.col3.push(this.imgs[i3]);
        }

        for (var i4 = 2; i4 < this.imgs.length; i4 = i4 + delta) {
          this.col4.push(this.imgs[i4]);
        }
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