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

<template>Player Count: {{ store.playerCount }}</template>

<template>
  <p>Test successful</p>
</template>
