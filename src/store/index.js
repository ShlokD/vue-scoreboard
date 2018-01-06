import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initState = {
  Laxmi: {
    name: 'Laxmi',
    score: 12
  },
  Narayan: {
    name: 'Narayan',
    score: 13
  }
};

const getters = {
  getScoreByPlayer: state => player => ({
    hashes: Math.floor(state[player].score / 5),
    ticks: state[player].score % 5
  })
};

const mutations = {
  increment: (state, player) => {
    const newScore = state[player].score + 1;
    Vue.set(state[player], 'score', newScore);
  },
  decrement: (state, player) => {
    const newScore = state[player].score === 0 ? 0 : state[player].score - 1;
    Vue.set(state[player], 'score', newScore);
  },
  addPlayer: (state, player) => {
    const newPlayer = {
      name: player,
      score: 0
    };
    Vue.set(state, player, newPlayer);
  }
};

const actions = {
  increment: (context, player) => {
    context.commit('increment', player);
  },
  decrement: (context, player) => {
    context.commit('decrement', player);
  },
  addPlayer: (context, player) => {
    context.commit('addPlayer', player);
  }
};

export default new Vuex.Store({
  state: initState,
  getters,
  mutations,
  actions
});
