import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import firebase from 'firebase/app'
import 'firebase/firestore'
import fireconfig from '../fireconfig'
firebase.initializeApp(fireconfig)

Vue.use(Vuex)

const state = {
  db: firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {
  }
})
