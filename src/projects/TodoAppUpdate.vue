<script setup>
import { computed, reactive, ref } from "vue";
import TodoComponent from "../components/TodoComponent.vue";


const todos = reactive([
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: true,
  },
  {
    id: 4,
    title: "Todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "Todo 5",
    completed: true,
  },
]);

const todo = ref("");

// const removeTodo = (index) => todos.splice(index, 1);

const addTodo = () => {
  if (todo.value.length > 0) {
    todos.push({
      id: todos.length + 1,
      title: todo.value,
      completed: false,
    });

    todo.value = "";
  }
};

const countTodos = computed(() => todos.length);
const completedTodos = computed(
  () => todos.filter((todo) => todo.completed).length
);
</script>

<template>
  <main class="flex justify-center items-center min-h-screen">
    <div class="max-w-[720px] mx-auto">
      <section
        class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div class="p-6 divide-y divide-gray-200 space-y-4">
          <h1
            class="block font-sans text-xl font-semibold leading-snug uppercase text-blue-900 antialiased"
          >
            To Do List
            <span v-if="todos.length"
              >- ({{ completedTodos }}/{{ countTodos }})</span
            >
          </h1>

          <form @submit.prevent="addTodo" class="flex items-center gap-2 pt-4">
            <input
              v-model="todo"
              type="text"
              placeholder="Add a new task"
              class="grow px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
            />
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Add
            </button>
          </form>

          <ul v-if="todos.length">
            <li v-for="(todo, index) in todos" :key="todo.id">
              <!-- <TodoComponent :todo="todo" :index="index" :removeTodo="removeTodo" /> -->
              <TodoComponent :todo="todo" :index="index" :todos="todos" />
            </li>
          </ul>
          <p v-else class="text-gray-500 pt-3">No task yet.</p>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
