import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyA1RmAM6Rq77qYI77psmYvp5-jVmMbJ-IU",
  authDomain: "bee666-b0800.firebaseapp.com",
  projectId: "bee666-b0800",
  storageBucket: "bee666-b0800.appspot.com",
  messagingSenderId: "732392778959",
  appId: "1:732392778959:web:d60a51588335a30dd15bba",
  measurementId: "G-459RYBFMZ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
