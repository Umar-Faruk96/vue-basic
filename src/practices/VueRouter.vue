<script setup>
</script>

<template>
  <!-- non SPA -->
  <!-- <nav class="flex gap-4 p-4 bg-gray-200 text-gray-700 font-bold text-lg mb-4">
    <a href="/">Home</a> |
    <a href="/about">About</a>
  </nav> -->
  <!-- SPA -->
  <!-- <nav class="flex gap-4 p-4 bg-gray-200 text-gray-700 font-bold text-lg mb-4">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <!-- SPA with named routes -->
  <nav class="flex gap-4 p-4 bg-gray-200 text-gray-700 font-bold text-lg mb-4">
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>

  <router-view />
</template>
