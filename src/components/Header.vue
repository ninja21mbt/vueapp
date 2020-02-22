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
              <router-link to="/work">visual</router-link>
              <a>event</a>
              <router-link to="/references">references</router-link> 
          </div>
      </div>
      <div id="rightbox">
          <router-link to="/work">contact</router-link>
          <router-link to="/work">artworks</router-link>
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
        position: sticky;
        top: 0;
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
        margin-left: 11px;
        font-size: 1.5vw;
        cursor: pointer;
        font-family: inherit;
        text-decoration: none;
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
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
 
    @media all and (orientation:portrait){
        #header{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            position: relative;
        }

        #leftbox{
            display: flex;
            align-items: center;
            width: 100%;
        }

        a{
            font-size: 3em;
            margin: 0;
            margin-bottom:2%    
        }

        #btm_btns{
            display: flex;
            flex-direction: column;
            width: 40%;
        }

        #first{
            visibility: hidden;
        }

        #gifbox{
            width: 100%;
            align-items: center;
        }

        #gifbox img{
            width: 100%
        }

        #rotatinggif{
            width: 60%;
        }

        #constructionbox{
            display: flex;
            flex-direction: row;
            width: 100%
        }

        #rightbox{
            position: fixed;
            bottom: 0;
            display: flex;
            flex-direction: row;
        }
    }
</style>