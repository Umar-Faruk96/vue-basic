<script setup>
let msg = "Welcome Omor Faruk Sheikh Raihan";
let dynamicId = 2;
let isButtonDisabled = true;

const objectOfAttributes = {
  id: "container",
  class: "wrapper",
  style: "color: red; font-size: 20px",
};

let show = false;

const clickMe = () => {
  console.log("Clicked");
};
</script>

<template>
  <div v-bind:id="dynamicId">{{ msg }}</div>
  <div v-html="msg"></div>

  <button type="button" :disabled="isButtonDisabled" @click="clickMe">Disabled or Not?</button>

  <div v-bind="objectOfAttributes">Multiple Data Binding</div>

  <p v-if="show">Now you can see me! (if)</p>
  <p v-show="show">Now you can see me! (show)</p>

  <button v-on:click="clickMe">Click Me</button>
</template>

<style scoped></style>
