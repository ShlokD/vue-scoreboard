<template>
<div class="add-player-section">
  <form v-on:submit='handleSubmit'>
    <input v-model='player' type="text" placeholder="Enter a player name">
  </form>
  </div>
</template>


<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'add-player',
  data() {
    return {
      player: ''
    };
  },
  methods: {
    handleSubmit(ev) {
      if (!isEmpty(this.player)) {
        this.$store.dispatch('addPlayer', this.player);
        this.player = '';
      }
      ev.preventDefault();
    }
  }
};
</script>


<style scoped>
.add-player-section {
  float: right;
  position: relative;
  bottom: 40%;
}
</style>