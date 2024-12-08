<script setup>
import { ref } from "vue";
import useUtils from "../utils";

let number = ref(0);

const { increment, decrement } = useUtils(number);
</script>

<template>
  <div>
    <!-- <button @click="increment">Increment</button> -->
    <button @click="number++">Increment</button>
    <p>Count: {{ number }}</p>
    <!-- <button @click="decrement">Decrement</button> -->
    <button @click="number--">Decrement</button>
  </div>
</template>

<style scoped></style>
