<script>
import { store } from '../store.js';
import { roll } from '../functions.js';



export default {
  data() {
    return {
      store,
      count: 1
    };
  },
  methods: {
    roll(event) {
        var dice = roll()
        this.count = dice;
        //alert(dice);
    },
    
  },
};
</script>

<template>
    <!-- <img src="../assets/dice-side-1.png" width="200" height="200"/> -->
    <img :src="`src/assets/dice-side-${count}.png`" width="200" height="200"/>
    

    <div class="card">
    <button type="button" @click="roll">Roll</button>
  </div>
</template>


