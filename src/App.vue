<template>
  <div id="app">
    <header>
      <span>Vue.js Scorecard</span>
      <add-player></add-player>
    </header>
    <main>
      <scoreboard></scoreboard>
    </main>
  </div>
</template>

<script>
import Scoreboard from './components/Scoreboard';
import AddPlayer from './components/AddPlayer';

export default {
  name: 'app',
  components: {
    Scoreboard,
    'add-player': AddPlayer
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  background: black;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
