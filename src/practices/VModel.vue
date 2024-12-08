<script setup>
import { ref, reactive } from "vue";

let subject = ref("Something");

let profile = reactive({
  name: "Omor Faruk Sheikh Raihan",
  age: 24,
});
</script>

<template>
  <!-- try changing the value, see the output with ref reactivity -->
  <form>
    <input type="text" v-model="subject" />
  </form>

  <p>Output: {{ subject }}</p>

  <!-- try changing the value, see the output with reactive reactivity -->
  <form>
    <input type="text" v-model="profile.name" />
    <input type="number" v-model="profile.age" />
  </form>

  <h1>My name is {{ profile.name }} and I'm {{ profile.age }}</h1>
</template>

<style scoped></style>
