<template>
<div id="body">
    <Header/>
    <Gallery/>
</div>
</template>

<script>
 import Header from './Header.vue'
 import Gallery from './Gallery.vue'

export default {
  name: 'Home',
  props:[],
  components: {
      Header,
      Gallery
  },
}
</script>

<style scoped>
   #body{
       width: 100%;
       display: flex;
       align-items: center;
       flex-direction: column;
       
   }
</style>
