import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
import { store } from "./store/";
import router from "./router";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBz44b5-_jPvZg0RgSkpYBODHC_q_TZtrM",
  authDomain: "vue-fire-2b2c4.firebaseapp.com",
  databaseURL: "https://vue-fire-2b2c4.firebaseio.com",
  projectId: "vue-fire-2b2c4",
  storageBucket: "",
  messagingSenderId: "641069030614",
  appId: "1:641069030614:web:523fd39dfca1278a"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;
/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    el: "#app",
    vuetify,
    router,
    store,
    render: h => h(App),
    created() {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      }
    }
  });
  unsubscribe();
});
