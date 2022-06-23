<template>
  <v-app id="inspire">
    <!-- ========== Start NavBar ========== -->
    <v-navigation-drawer 
    v-model="drawer"
    :mobile-breakpoint="760"
    app>
    <!-- Img -->
      <v-img
        class="pa-4"
        position="center"
        height="160"
        src="https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar
        size="70"
        class="mb-2"
        >
          <img
            src="@/assets/img/foto.jpg"
            alt="Dragan"
          >
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Dragan Savic
        </div>
        <div class="white--text text-subtitle-2">
          @DSlundro
        </div>
      </v-img>

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
      src="https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg"
      app
      height="160"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      
      <v-container class=" header-container pt-3">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <SearchField />
        </v-row>

        <v-row>
          <v-app-bar-title class="text-h4 ml-4">
            {{$store.state.appTitle}}
          </v-app-bar-title>
        </v-row>

        <v-row>
          <LiveDateTime />
        </v-row>
      </v-container>
    </v-app-bar>
    <!-- ========== End App Bar ========== -->

    <v-main>
      <router-view></router-view>
      <SnackBar />
    </v-main>
  </v-app>
</template>

<script>
import SnackBar from './components/Global/SnackBar.vue'
import LiveDateTime from './components/Tools/LiveDateTime.vue'
import SearchField from './components/Tools/SearchField.vue'
  export default {
  components: { SnackBar, SearchField, LiveDateTime },
    data: () => ({ 
      drawer: true,
      items: [
          { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
          { title: 'About', icon: 'mdi-information-outline', to: '/about' },
        ],
      }),
  }
</script>

<style land="scss">
@import '@/assets/scss/app.scss';

.header-container{
  max-width: none !important;
}

.v-main__wrap{
  min-height: 350px !important;
}
</style>