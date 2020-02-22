<template>
  <div id="header">
      <img id="rotatinggif" src="../assets/headerassets/headergif_drehend.gif">
      <div id="leftbox">
          <div id="constructionbox">
              <img src="../assets/headerassets/underconstruction.gif">
              <img src="../assets/headerassets/underconstruction.gif">
          </div>
          <div id="gifbox">
              <img src="../assets/headerassets/nothingisperfect.gif">
              <img src="../assets/headerassets/visual.gif">
          </div>
          <div id="btm_btns">
              <router-link to="/work" id="first">I do everything</router-link>
              <a>visual</a>
              <a>event</a>
              <router-link to="/references">references</router-link> 
          </div>
      </div>
      <div id="rightbox">
          <a>contact</a>
          <a>artworks</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
    #header{
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5%;
    }

    #rotatinggif{
        width: 18%;
    }

/*-- buttons --*/
    a{
        box-shadow: 0px 0px 0px transparent;
        text-shadow: 0px 0px 0px transparent;
        border: 4px solid #FFF;
        background-color: black;
        color: #FFF;
        margin-top: 2px;
        margin-bottom: 8px;
        margin-left: 8px;
        font-size: 1.5vw;
        cursor: pointer;
        font-family: inherit;
        text-decoration: none;
    }

    a:hover{
        border-color: darkgrey;
        transition-duration: 0.5s;
    }

/*-- left box --*/
    #leftbox{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    #constructionbox img{
        width: 50%;
    }

    #gifbox{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }

    #gifbox img{
        width: 50%;
    }

    #btm_btns{
        width: 100%;
    }

    #first{
        padding-left: 15%;
        padding-right: 15%;
        margin-right: 5%;
    }
    
/*-- right box --*/
    #rightbox{
        display:flex;
        flex-direction: column;
    }
</style>
