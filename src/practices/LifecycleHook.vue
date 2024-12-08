<script setup>
import { ref, onMounted, onUpdated} from "vue";

let users = ref([]);

function getUsers() {
  users.value = [
    {
      id: 1,
      name: "Omor Faruk Sheikh Raihan",
      email: "omorfaruksheikhraihan@gmail.com",
    },
    {
      id: 2,
      name: "Faruk",
      email: "faruk@gmail.com",
    },
    {
      id: 3,
      name: "Sheikh",
      email: "sheikh@gmail.com",
    },
    {
      id: 4,
      name: "Raihan",
      email: "raihan@gmail.com",
    },
  ];
}

onMounted(() => {
  console.log("Mounted");
  // getUsers();
});

onUpdated(() => {
  console.log("Updated");
});

</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
