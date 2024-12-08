<script setup>
import { computed, ref } from "vue";

let password = ref("");

const passwordStrength = computed(() => {
  let strength = (password.value.length * 100) / 10;
  return Math.min(strength, 100);
});

let firstName = ref("");
let lastName = ref("");
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

let city = ref("");

const cityUpper = computed({
  get: () => city.value.toUpperCase(),

  set: (value) => {
    city.value = value.toUpperCase();
  },
});
</script>

<template>
  <div>
    <input
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />
    <p>Password: {{ password }}</p>

    <p>Password Strength: {{ passwordStrength }}%</p>

    <input
      type="text"
      v-model="firstName"
      placeholder="Enter your first name"
    />
    <input type="text" v-model="lastName" placeholder="Enter your last name" />
    <p>Full Name: {{ fullName }}</p>

    <input type="text" v-model="cityUpper" placeholder="Enter your city" />
    <p>City: {{ city }}</p>
  </div>
</template>

<style scoped></style>
