import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newTaskTitle: '',
    tasks:[],
    snackbar: {
      show: false,
      text: ``,
    }
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
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    doneTask(state, id){
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    showSnackBar(state, text){
      state.snackbar.show = true;
      state.snackbar.text = text
    },
  },
  actions: {
    addTask({commit}, newTaskTitle){
      commit('addTask', newTaskTitle);
      commit('showSnackBar', 'Task Added');
    },
    deleteTask({commit}, id){
      commit('deleteTask', id);
      commit('showSnackBar', 'Task Deleted');
    },
  },
  modules: {
  }
})
