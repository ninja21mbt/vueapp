<template>
  <div id="gallery">
    <div class="column">
      <img v-for="(src, idx) in imgs" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in imgs" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
      <img v-for="(src, idx) in imgs" :key="idx" :src="src" alt="image or gif" />
    </div>
    <div class="column">
     <img v-for="(src, idx) in imgs" :key="idx" :src="src" alt="image or gif" /> 
    </div>
  </div>
</template>

<script> 

export default {
  name: "Gallery",


data: () => {
    return {
      imgs: null
    }
  },
  mounted () {
    fetch('https://7vhmrxsuy0.execute-api.eu-central-1.amazonaws.com/prod')
      .then(response => response.json())
      .then(data => this.imgs = data.urls)
  }
}

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