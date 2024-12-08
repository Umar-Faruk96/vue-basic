<script setup>
import { ref } from "vue";

let count = ref(0); // reactive for single value
console.log(count);

setInterval(() => {
  count.value++;
}, 1000);
</script>

<template>
  <h1>Counting: {{ count }}</h1>
</template>

<style scoped></style>
