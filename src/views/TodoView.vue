<template>
  <div class="home">
    <v-list
      flat
    >
      <v-list-item-group
        v-model="settings"
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
        tasks: [
          {id: 1, title: 'Wake up', done: false},
          {id: 2, title: 'Shower', done: false},
          {id: 3, title: 'Breakfast', done: false},
          {id: 4, title: 'Check emails', done: false},
          {id: 5, title: 'Workout', done: false},
        ],
      }
    },
    methods:{
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
