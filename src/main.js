import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// import TemplateSyntax from './practices/TemplateSyntax.vue'
// import TodoApp from './projects/TodoApp.vue'
// import TodoAppUpdate from './projects/TodoAppUpdate.vue'
// import TodoAppEmit from './projects/TodoAppEmit.vue'
// import Watcher from './practices/Watcher.vue'

createApp(App).use(router).mount("#app");

// createApp(TemplateSyntax).mount('#app')
// createApp(TodoApp).mount('#app')
// createApp(TodoAppUpdate).mount('#app')
// createApp(TodoAppEmit).mount('#app')
// createApp(Watcher).mount('#app')
