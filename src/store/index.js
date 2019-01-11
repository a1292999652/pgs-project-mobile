import Vuex from 'vuex'
import Vue from "vue";
import mutations from './mutations'

Vue.use(Vuex);


const state = {
    loginState: {success: false, id: null},
    showFilter: false,
};

export default new Vuex.Store({
    state,
    mutations,
    strict: true,

});
