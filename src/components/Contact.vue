<template>
  <div id="body">
    <Header />
    <form>
      <input type="text" required placeholder="your name" autofocus />
      <input type="email" required placeholder="your email adress" />
      <input type="text" required placeholder="subject" />
      <textarea max-length="200" required placeholder="what do you have to say?"></textarea>
      <button type="submit">Transfer</button>
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Contact",
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#body {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    width: 40%;

    button {
      width: 20%;
      background-color: inherit;
      color: white;
      box-shadow: none;
      box-shadow: 0px 0px 0px transparent;
      border: 2px solid white;
      text-shadow: 0px 0px 0px transparent;
      margin-top: 3%;
      padding: 3%;
      align-self: flex-end;
    }
    input {
      width: 100%;
      font-size: 1.2vw;
      background-color: inherit;
      border: 1px solid grey;
      margin: 5px;
      color: white;
      padding: 0.3em 0em 0.3em 0.3em;
    }
    textarea {
      width: 99%;
      max-width: 100%;
      min-height: 40vh;
      max-height: 70vh;
      font-size: 1.2vw;
      background-color: inherit;
      margin: 5px;
      color: white;
      padding: 0.3em 0em 0.3em 0.3em;
    }
  }
}

@media only screen and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  #body {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    form {
      display: flex;
      flex-direction: column;
      width: 90%;

      button {
        width: 40%;
        font-size: 2em;
        margin-bottom: 5em;
      }
      input {
        width: 100%;
        font-size: 3em;
        border: 1px solid grey;
        margin: 0.3em 0em 0.3em 0em;
        padding: 0.3em 0em 0.3em 0.3em;
      }
      textarea {
        font-size: 3em; 
        padding: 0.3em 0em 0.3em 0.3em;
      }
    }
  }
}
</style>