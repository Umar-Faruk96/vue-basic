<script setup>
let friends = ["Omor", "Faruk", "Sheikh", "Raihan"];

let products = [
  {
    id: 1,
    name: "Laptop",
    description:
      "Lenovo Stylish Laptop with 16GB RAM, 1TB SSD, Windows 10, 1 Year Warranty and many more features",
    price: 1000.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Keyboard",
    description:
      "Bluetooth Keyboard with backlit keys, wireless, 1 Year Warranty and many more features",
    price: 100.99,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Mouse",
    description:
      "Bluetooth Mouse with 3 buttons, wireless, 1 Year Warranty and many more features",
    price: 50.99,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Headphones",
    description:
      "Bluetooth Headphones with 1 Year Warranty and many more features",
    price: 200.99,
    category: "Electronics",
  },
  {
    id: 5,
    name: "Camera",
    description:
      "Camera with 1080p resolution, 1 Year Warranty and many more features",
    price: 500.99,
    category: "Electronics",
  },
];
</script>

<template>
  <div>
    <h1>My friends:</h1>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">{{ friend }}</li>
    </ul>
  </div>

  <div>
    <h2>My products:</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
th,
td {
  border: 1px solid black;
  padding: 10px;
}
</style>
