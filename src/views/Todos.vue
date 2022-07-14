<template>
  <div>
    <h2>Todo application</h2>
      <a href='/'>Home</a>
    <TodoNew @on-submit="onSubmit" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="no-completed">No-completed</option>
    </select>
    <hr />
    <TodoList :todos="filterTodos" @remove-todo="removeTodo" v-if=" filterTodos.length"/>
    <p v-else>No todos</p>
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
      filter: 'all'
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
  // watch: {
  //   filter(value) {
  //     console.log(value)
  //   }
  computed: {
    filterTodos() {
      if(this.filter === 'all') {
        return this.todos
      }

       if(this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if(this.filter === 'no-completed') {
        return this.todos.filter(t => !t.completed)
      }
    }
  },
  components: {
    TodoList,
    TodoNew,
  },
};
</script>