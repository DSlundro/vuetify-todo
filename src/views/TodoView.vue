<template>
  <div class="home">

    <v-text-field
      v-model="$store.state.newTaskTitle"
      @click:append="$store.commit('addTask', $store.state.newTaskTitle)"
      @keyup.enter="$store.commit('addTask', $store.state.newTaskTitle)"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>

    <v-list
    v-if="$store.state.tasks.length"
      flat
      class="pa-0"
    >
      <v-list-item-group
        multiple
        active-class=""
      >
        <!-- ========== Start List ========== -->
        <div
        v-for="task in $store.state.tasks"
        :key="task.id"
        >
          <v-list-item
          @click="$store.commit('doneTask', task.id)"
          :class="{ 'blue lighten-5' : task.done}"
          >
            <template v-slot:default>
              <!-- Checkbox -->
              <v-list-item-action>
                <v-checkbox :input-value="task.done"></v-checkbox>
              </v-list-item-action>
              <!-- List Item -->
              <v-list-item-content>
                <v-list-item-title
                :class="{'text-decoration-line-through' : task.done}"
                >
                  {{task.title}}
                </v-list-item-title>
              </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="primary lighten-1"
                @click.stop="$store.commit('deleteTask', task.id)"
                >mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>

            </template>
          </v-list-item>
        <v-divider></v-divider>
        </div>
        <!-- ========== End List ========== -->

      </v-list-item-group>
    </v-list>

    <div 
    v-else
    class="no-tasks"
    >

      <v-icon
      size="100"
      color="primary"
      >
      mdi-check
      </v-icon>
      <div class="text-h3 primary--text">No Tasks</div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'TodoView',
  }
</script>

<style lang="scss">
.no-tasks{
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}


</style>