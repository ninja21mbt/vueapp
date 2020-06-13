<template>
  <div id="header">
    <img id="rotatinggif" src="../assets/headerassets/headergif_drehend.gif" />
    <div id="leftbox">
      <div id="constructionbox">
        <img src="../assets/headerassets/underconstruction.gif" />
        <img src="../assets/headerassets/underconstruction.gif" />
      </div>
      <div id="gifbox">
        <img src="../assets/headerassets/nothingisperfect.gif" />
        <img src="../assets/headerassets/visual.gif" />
      </div>
      <div id="btm_btns">
        <router-link to="/work">I do everything</router-link>
        <router-link to="/motion">Visual</router-link>
        <router-link to="/work">Event</router-link>
        <router-link to="/references">References</router-link>
      </div>
    </div>
    <div id="rightbox">
      <router-link to="/contact">contact</router-link>
      <router-link to="/work">artworks</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
#header {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3%;
  padding: 2% 5% 0% 5%;
  position: sticky;
  top: 0;
  background-color: #1B1D23;
  box-shadow: 0 15px 15px 0 black;

  #rotatinggif {
    width: 18%;
  }
  a {
    box-shadow: 0px 0px 0px transparent;
    text-shadow: 0px 0px 0px transparent;
    border: 2px solid #fff;
    background-color: #1B1D23;
    color: #fff;
    margin-top: 2px;
    margin-bottom: 8px;
    margin-left: 11px;
    font-size: 1.2vw;
    cursor: pointer;
    font-family: inherit;
    text-decoration: none;
    text-align: center;
    width: 100%;
    padding-top: 0.17em;
    padding-bottom: 0.17em;

    &:hover {
      border-color: darkgrey;
      transition-duration: 0.5s;
    }
  }
  #leftbox {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    #constructionbox {
      img {
        width: 50%;
      }
    }
    #gifbox {
      display: flex;
      align-items: flex-end;
      flex-direction: column;

      img {
        width: 50%;
      }
    }
    #btm_btns {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }
  #rightbox {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;

    #rotatinggif {
      width: 60%;
    }

    a {
      font-size: 3em;
      margin: 0;
      margin-bottom: 2%;
    }

    #leftbox {
      display: flex;
      align-items: center;
      width: 100%;

      #constructionbox {
        display: flex;
        flex-direction: row;
        width: 100%;
      }

      #gifbox {
        width: 100%;
        align-items: center;

        img {
          width: 100%;
        }
      }
      #first {
        visibility: hidden;
      }
      #btm_btns {
        display: flex;
        flex-direction: column;
        width: 60%;
        font-size: 0.5em;
        margin: 10px 0px 5px 0px;
      }
    }
    #rightbox {
      position: fixed;
      bottom: 0;
      display: flex;
      flex-direction: row;

      a {
        margin: 0 0.2em 0 0.2em;
        padding: 0.2em;
        font-size: 1em;
      }
    }
  }
}
</style>