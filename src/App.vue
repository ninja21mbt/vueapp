<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {      
    }
  },
  components: {
  },
}

</script>

<style>
body{
  margin:0;
  background-color: #0b0d0f;
}

#app {
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
}

</style>
