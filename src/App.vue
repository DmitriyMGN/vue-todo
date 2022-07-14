<template>
  <div id="app">
    <h1>Todo application</h1>
    <TodoNew @on-submit="onSubmit" />
    <hr />
    <TodoList :todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoNew from "@/components/TodoNew";

export default {
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=8")
      .then((response) => response.json())
      .then((json) => (this.todos = json));
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    onSubmit(newTitle) {
      this.todos.push(newTitle);
    },
  },
  components: {
    TodoList,
    TodoNew,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
