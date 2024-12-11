<script setup>
import { ref, reactive, watch } from "vue";

// const number = ref(0);
const objNumber = reactive({
  value: 0,
});

/* setInterval(() => {
  number.value++;
}, 1000); */

setInterval(() => {
  objNumber.value++;
}, 1000);

/* watch(number, (newValue, oldValue) => {
  console.log("Number changed", newValue, oldValue);
}); */

/* watch(() => objNumber.value, (newValue, oldValue) => {
  console.log("Number changed", newValue, oldValue);
}); */

watch(objNumber, (objNumber) => {
  console.log("Number changed", objNumber.value);
}, {
  deep: true,
  // immediate: true
});
</script>

<template>
  <!-- <h1>Counting: {{ number.value }}</h1> -->
  <h1>Counting: {{ objNumber.value }}</h1>
</template>
