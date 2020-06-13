<template>
  <div id="header">
    <img id="rotatinggif" src="../assets/headerassets/headergif_drehend.gif" />
    <div id="rightbox">
      <div id="constructionbox">
        <img src="../assets/headerassets/underconstruction.gif" />
        <img src="../assets/headerassets/underconstruction.gif" />
      </div>
      <div id="gifbox">
        <img src="../assets/headerassets/nothingisperfect.gif" />
        <img src="../assets/headerassets/visual.gif" />
      </div>
      <div id="buttons">
        <router-link to="/work">
          <img src="../assets/headerassets/EVERYTHING.png" alt="button link to everything" />
        </router-link>
        <router-link to="/motion">
          <img src="../assets/headerassets/CASES.png" alt="button link to cases" />
        </router-link>
        <router-link to="/work">
          <img src="../assets/headerassets/ME.png" alt="button link to me" />
        </router-link>
        <router-link to="/references">
          <img src="../assets/headerassets/SHOP.png" alt="button link to shop" />
        </router-link>
      </div>
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
  background-color: #1b1d23;
  box-shadow: 0 15px 15px 0 #0b0d0f;

  #rotatinggif {
    width: 18%;
  }

  #rightbox {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 80%;

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
        width: 30%;
      }
    }
    #buttons {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-content: center;

      a {
        box-shadow: 
        10px 10px 25px #0B0C0E,
        inset -10px -10px 25px #0B0C0E,
        -10px -10px 25px #323439,
        inset 10px 10px 25px #323439;
        background-color: #1b1d23;
        margin: 15px;
        font-size: 1.2vw;
        cursor: pointer;
        text-align: center;
        flex: 1;
        border-radius: 15px;

        &:hover{
          box-shadow: 
        10px 10px 25px #323439,
        inset -10px -10px 25px #323439,
        -10px -10px 25px #0B0C0E,
        inset 10px 10px 25px #0B0C0E;
        transition-duration: 0.3s;
        }

        img {
          height: 15px;
          padding: 10px;
        }

        &:first-child {
          flex: 2;
        }
      }
    }
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
      #buttons {
        display: flex;
        flex-direction: column;
        width: 60%;
        font-size: 0.5em;
        margin: 10px 0px 5px 0px;
      }
    }
  }
}
</style>