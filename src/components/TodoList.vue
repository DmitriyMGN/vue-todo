<template>
  <div>
    <TodoItem v-for="todo in todos" v-text="todo.text" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  components: {
    TodoItem
  },
  props: ['todos']
}
</script> 