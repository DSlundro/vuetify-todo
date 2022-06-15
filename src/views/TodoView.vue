<template>
  <div class="home">
    <FieldAddTask />
    <ListTasks v-if="$store.state.tasks.length"/>
    <NoTasks v-else/>
  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
import ListTasks from '@/components/Todo/ListTasks.vue'
import NoTasks from '@/components/Todo/NoTasks.vue'

  export default {
    components: { FieldAddTask, ListTasks, NoTasks }, 
    name: 'TodoView',
  }
</script>

<style lang="scss" scoped>
.no-tasks{
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>