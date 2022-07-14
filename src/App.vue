<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr/>
    <TodoList 
    :todos="todos"
    @remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, text: 'Помыть машину', completed: false},
        {id: 2, text: 'Пропылесосить', completed: false},
        {id: 3, text: 'Погулять', completed: false}
      ]
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  components: {
    TodoList
  }
}
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
