import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        gatos: null,
    },

    mutations: {
        setCat(state, dato) {
            state.gatos = dato;
        },
    },

    actions: {

        getCat({ commit }) {
            let cat = null;
            return new Promise((resolve, reject) => {
                axios.get(' https://cat-fact.herokuapp.com/facts/random?amount=15').then(res => {
                    cat = res.data;
                    commit('setCat', cat);
                    resolve('ok');
                });


            });
        },

    },
    getters: {
        getCats(state) {
            return state.gatos;
        }

    }
});