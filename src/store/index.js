import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newTaskTitle: '',
    tasks:
    [
      {
        id : 1,
        title: 'Hello',
        done: false,
      },
      {
        id : 2,
        title: 'Wake up',
        done: false,
      },
      {
        id : 3,
        title: 'Breakfast',
        done: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle){
      let newTask = {
        id : Date.now(),
        title: newTaskTitle,
        done: false,
      }
      state.tasks.push(newTask);
      state.newTaskTitle = '';
    },
    doneTask(state, id){
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
