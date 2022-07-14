<template>
<li>
  <span :class="{done: todo.completed}">
    <input type="checkbox" @change="todo.completed = !todo.completed">
    <strong>{{ index }}</strong>
  {{ todo.title }}
    </span>
  <button class="rm" @click="$emit('remove-todo', todo.id)" >&times</button>
</li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }

}
</script> 

<style>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
}

.input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>