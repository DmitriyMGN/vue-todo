import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
    todos: [],
    filter: 'all'
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
    allFilters(state) {
      return state.filter
    }
  },
  actions: {
    async getTodos(context) {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");
      const posts = await res.json();

      context.commit('updateTodos', posts) 
    }
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    }
  }
})




