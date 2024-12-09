<script setup>
// defineProps(["todo", "index", "removeTodo"]);

/* defineProps({
  todo: {
    type: Object,
  },
  index: {
    type: Number,
  },
  removeTodo: {
    type: Function,
  },
}) */

/* const { todo, index, removeTodo } = defineProps([
  "todo",
  "index",
  "removeTodo",
]); */

// defineProps(["todo", "index", "todos"]);

/* defineProps({
  todo: {
    type: Object,
    },
    index: {
      type: Number,
      },
      todos: {
        type: Array,
        },
        }); */

const { todo, index, todos } = defineProps(["todo", "index", "todos"]);

const removeTodo = (index) => todos.splice(index, 1);
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <div
        class="relative flex cursor-pointer items-center rounded-full p-3"
        data-ripple-dark="true"
      >
        <input
          :id="'todo' + todo.id"
          type="checkbox"
          :checked="todo.completed"
          @input="todo.completed = !todo.completed"
          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
        />
        <span
          class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <label
        class="cursor-pointer select-none"
        :class="{ 'text-gray-400': todo.completed, 'text-blue-500': !todo.completed }"
        :for="'todo' + todo.id"
      >
        {{ todo.title }}
      </label>
    </div>
    <button @click="removeTodo(index)">
      <svg
        class="h-6 w-6 text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
        <line x1="18" y1="9" x2="12" y2="15" />
        <line x1="12" y1="9" x2="18" y2="15" />
      </svg>
    </button>
  </div>
</template>
