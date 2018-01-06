<template>
  <div class="player">
    <p class="player-name">{{ playerName }}</p>
    <div class="score">
      <div class="tally-five" v-for='n in hashes'>
      |||| 
      </div>
      <span class="tally-one" v-for='n in ticks'>
      |
      </span>
    </div>
    <div class='counter-buttons'>
     <button @click='increment'>+</button>
     <button @click='decrement'>-</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'player',
  props: ['playerName'],
  data() { return {}; },
  computed: mapState({
    hashes(state) {
      return Math.floor(state[this.playerName].score / 5);
    },
    ticks(state) {
      return state[this.playerName].score % 5;
    }
  }),
  methods: {
    increment() {
      this.$store.dispatch('increment', this.playerName);
    },
    decrement() {
      this.$store.dispatch('decrement', this.playerName);
    },
  }
};
</script>

<style scoped>
.player {
  display: block;
  margin: 12px;
  color: white;
}

.player-name {
  font-size: 3em;
  font-weight: 600;
}

.counter-buttons {
  font-size: 1.2em;
  font-weight: 500;

  margin: 12px;
}

.score {
  font-size: 2.4em;
}

.tally-five {
  text-decoration: line-through;
}
</style>