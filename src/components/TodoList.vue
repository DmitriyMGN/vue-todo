<template>
  <div>
    <ul>
    <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    @remove-todo="removeTodo"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
import TodoNew from '../components/TodoNew'


export default {
  props: ['todos'],
  components: {
    TodoItem, TodoNew
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script> 

<style>
ul {
  max-width: 600px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}
</style>