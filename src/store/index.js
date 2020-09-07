import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import state from './state';

import auth from './modules/auth';
import notes from './modules/notes';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    notes
  },
  actions: {},
  getters: {},
  mutations,
  state,
})

export default store