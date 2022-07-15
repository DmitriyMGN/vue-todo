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
    <TodoList :todos="getAllTodos" @remove-todo="removeTodo" v-if=" getAllTodos.length"/>
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
        filter: 'all'
    }
  },
  created() {
    this.$store.dispatch('getTodos')
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
        return this.getAllTodos
      }

       if(this.filter === 'completed') {
        return this.getAllTodos.filter(t => t.completed)
      }

      if(this.filter === 'no-completed') {
        return this.getAllTodos.filter(t => !t.completed)
      }
    },
    getAllTodos() {
      return this.$store.getters.allTodos
    },
    getAllFilters() {
      return this.$store.getters.allFilters
    }

  },
  components: {
    TodoList,
    TodoNew,
  },
};
</script>