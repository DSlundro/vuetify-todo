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
          <v-list-item>
            <template v-slot:default="{ active }">
              <!-- Checkbox -->
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>
              <!-- List Item -->
              <v-list-item-content>
                <v-list-item-title>{{task.title}}</v-list-item-title>
              </v-list-item-content>
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
          {id: 1, title: 'Wake up'},
          {id: 2, title: 'Shower'},
          {id: 3, title: 'Breakfast'},
          {id: 4, title: 'Check emails'},
          {id: 5, title: 'Workout'},
        ]
      }
    }
  }
</script>
