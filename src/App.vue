<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="sidebar" app>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item v-for="item in menuItems" :key="item.id">
              <v-btn :to="item.path">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-btn>
            </v-list-item>
            <v-list-item @click="userSignOut">
              <v-btn>
                <v-icon>exit_to_app</v-icon>
                Sign out</v-btn
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar>
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click.stop="sidebar = !sidebar"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            {{ appTitle }}
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            text
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
          >
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-btn text @click="userSignOut" v-if="isAuthenticated">
            <v-icon left>exit_to_app</v-icon>
            Sign Out
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      sidebar: false
    };
  },
  methods: {
    userSignOut() {
      this.$store.dispatch("userSignOut");
    }
  },
  computed: {
    appTitle() {
      return this.$store.state.appTitle;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    menuItems() {
      if (this.isAuthenticated) {
        return [{ title: "Inicio", path: "/home", icon: "home" }];
      } else {
        return [
          { title: "Registro", path: "/signup", icon: "face" },
          { title: "Iniciar", path: "/signin", icon: "lock_open" }
        ];
      }
    }
  }
};
</script>
<style scoped></style>
