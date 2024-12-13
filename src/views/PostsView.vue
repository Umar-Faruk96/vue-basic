<script setup>
import { useRoute } from "vue-router";

// access route params with useRoute hook
// console.log(useRoute().params.id);

// access route params as props with defineProps
const { id } = defineProps(["id"]);

// only way to access route query
console.log(useRoute().query.email);

</script>

<template>
  <h1 class="text-3xl font-bold py-4 text-center">Posts View</h1>
  <p class="text-center text-2xl font-bold mb-4">Route params: {{ id }}</p>
  <!-- <p class="text-center text-2xl font-bold mb-4">Route params: {{ $route.params.id }}</p> -->
  <p class="text-center text-xl font-medium">Route query: {{ $route.query.email }}</p>
</template>

<style scoped></style>
