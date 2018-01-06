<template>
  <div class="scoreboard">
    <player 
      v-for="player in players"
      :key=player.name
      :playerName=player.name
    >
    </player>
    </div>
</template>

<script>
import player from './Player';

export default {
  name: 'hello',
  data() {
    return {
      players: this.$store.state
    };
  },
  components: {
    player
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.scoreboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  min-width: 480px;
  padding: 24px;
  
}
</style>
