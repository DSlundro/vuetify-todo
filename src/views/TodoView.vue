<template>
  <div class="home">

    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>

    <v-list
      flat
      class="pa-0"
    >
      <v-list-item-group
        multiple
        active-class=""
      >
        <!-- ========== Start List ========== -->
        <div
        v-for="task in tasks"
        :key="task.id"
        >
          <v-list-item
          @click="doneTask(task.id)"
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
                @click.stop="deleteTask(task.id)"
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
  </div>
</template>

<script>

  export default {
    name: 'TodoView',
    components: {
    },
    data(){
      return{
        newTaskTitle: '',
        tasks: [],
      }
    },
    methods:{
      addTask(){
        let newTask = {
          id : Date.now(),
          title: this.newTaskTitle,
          done: false,
        }
        this.tasks.push(newTask);
        this.newTaskTitle = '';
      },
      doneTask(id){
        let task = this.tasks.filter(task => task.id === id)[0];
        task.done = !task.done;
      },
      deleteTask(id){
        this.tasks = this.tasks.filter(task => task.id !== id)
      }
    }
  }
</script>
