<template>
<form @submit.prevent="onSubmit">
<input type="text" v-model="title">
<button type="submit">Добавить новое дело</button>
</form>
</template>

<script>



export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if(this.title.value !== 0) {
        const newTitle = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('on-submit', newTitle);
        this.title = '';
      }
    }
  }
  }


</script> 