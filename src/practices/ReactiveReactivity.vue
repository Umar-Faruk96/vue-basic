<script setup>
import { reactive } from "vue";

let profile = reactive({
  name: "Omor Faruk Sheikh Raihan",
  age: 24,
}); // reactive for object like value
// console.log(profile);

setInterval(() => {
  profile.age = 27;
}, 2000);
</script>

<template>
  <h1>My name is {{ profile.name }} and I'm {{ profile.age }}</h1>
</template>

<style scoped></style>
