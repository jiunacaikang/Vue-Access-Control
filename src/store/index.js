import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menuData1: null,
        userData1: null
    },
    mutations: {
        setMenu (state,data) {
            state.menuData1 = data
        },
        setUser (state,data) {
            state.userData1 = data
        }
    },
    getters: {
    },
    actions: {
    }
})
export default store;