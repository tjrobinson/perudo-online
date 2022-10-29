<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <p>Player Count: {{ store.playerCount }}</p>

  <p>Test successful</p>
</template>
