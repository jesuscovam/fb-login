<template lang="html">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center sign" mt-5>
        <h1>
          Registrarse
        </h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-form @submit.prevent="userSignUp">
          <v-flex>
            <v-alert type="error" dismissible v-model="alert">
              {{ error }}
            </v-alert>
            <v-text-field
              name="email"
              label="Email"
              id="email"
              type="email"
              append-icon="mail"
              v-model="email"
              required
            >
            </v-text-field>
            <v-text-field
              name="password"
              label="Contraseña"
              id="password"
              type="password"
              append-icon="lock_open"
              v-model="password"
              required
            >
            </v-text-field>
            <v-text-field
              name="confirmPassword"
              label="Confirmar Contraseña"
              id="confirmPassword"
              type="password"
              append-icon="lock"
              v-model="confirmPassword"
              :rules="[comparePasswords]"
              required
            >
            </v-text-field>
            <v-btn color="primary" type="submit" :disabled="loading"
              >Registrarse</v-btn
            >
          </v-flex>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      alert: false
    };
  },
  methods: {
    userSignUp() {
      if (this.comparePasswords !== true) return;
      this.$store.dispatch("userSignUp", {
        email: this.email,
        password: this.password
      });
    }
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true;
      }
    },
    alert(value) {
      if (!value) {
        this.$store.commit("setError", null);
      }
    }
  },
  computed: {
    comparePasswords() {
      return this.password === this.confirmPassword
        ? true
        : `Passwords don't match`;
    },

    error() {
      return this.$store.state.error;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="css" scoped>
.sign{
  text-align: center;

  }
</style>
