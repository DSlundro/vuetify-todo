import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: null,
    newTaskTitle: '',
    tasks:[],
    snackbar: {
      show: false,
      text: ``,
    },
  },
  getters: {
  },
  mutations: {
    setSearch(state, value){
      state.search = value
    },
    addTask(state, newTaskTitle){
      let newTask = {
        id : Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      }
      state.tasks.push(newTask);
      state.newTaskTitle = '';
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    updateTaskTitle(state, payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.title = payload.title
    },
    updateTaskDueDate(state, payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.dueDate = payload.dueDate
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
      commit('showSnackBar', 'Task Added!');
    },
    deleteTask({commit}, id){
      commit('deleteTask', id);
      commit('showSnackBar', 'Task Deleted!');
    },
    updateTaskTitle({ commit }, payload){
      commit('updateTaskTitle', payload)
      commit('showSnackBar', 'Task Updated!')
    },
    updateTaskDueDate({ commit }, payload){
      commit('updateTaskDueDate', payload)
      commit('showSnackBar', 'Due Date Updated!')
    },
  },
  modules: {
  }
})
