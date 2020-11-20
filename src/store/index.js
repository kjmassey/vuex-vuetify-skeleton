import Vue from "vue";
import Vuex from "vuex";
import cal from './modules/cal'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cal
  }
});
