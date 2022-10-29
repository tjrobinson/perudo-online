<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    start(event) {
      alert(`Hello`);
    },
  },
};
</script>

<template>
  <h1>Perudo</h1>

  <p>How many players?</p>

  <select>
    <option text="1" />
    <option text="2" />
    <option text="3" />
    <option text="4" />
    <option text="5" />
    <option text="6" />
    <option text="7" />
    <option text="8" />
  </select>

  <div class="card">
    <button type="button" @click="start">Start</button>
  </div>
</template>
