<template>
  <v-app id="inspire">
    <!-- ========== Start NavBar ========== -->
    <v-navigation-drawer 
    v-model="drawer"
    app>
    <!-- Title -->
      <v-list-item>
        <v-list-item-content>

          <v-list-item-title class="text-h6">
            Vuetify Todo
          </v-list-item-title>

          <v-list-item-subtitle>
            Monitor your activities!
          </v-list-item-subtitle>
          
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- NavBar list -->
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ========== End NavBar ========== -->

    <!-- ========== Start App Bar ========== -->
    <v-app-bar
      color="primary"
      dark
      shrink-on-scroll
      src="https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_960_720.jpg"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify Todo</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>
    <!-- ========== End App Bar ========== -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
          { title: 'About', icon: 'mdi-information-outline', to: '/about' },
        ],
      }),
  }
</script>