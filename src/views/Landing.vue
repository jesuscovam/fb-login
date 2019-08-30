<template lang="html">
  <v-container fluid>
    <v-layout row wrap class="center">
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>{{ title }}</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          Es una aplicacbion SPA basica<br />
          con autenticacion de Google Firebase
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center buttons" mt-5>
        <v-btn color="primary" to="/signup">Registrarse</v-btn>
        <v-btn to="/signin">Iniciar</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    title() {
      return this.$store.state.appTitle;
    }
  }
};
</script>

<style lang="css" scoped>
.center{
  text-align: center
}
</style>
