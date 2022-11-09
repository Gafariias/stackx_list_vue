import axios from "axios";
import { createStore } from 'vuex';

export default createStore({
    state: {
        dataUser: []
    },
    mutations: {
        storeUsers(state, payload) {
            state.dataUser = payload;
        }
    },
    actions: {
        getUsers({ commit }) {
            return axios.get('https://randomuser.me/api/?results=10&nat=br')
            .then(res => {
                commit('storeUsers', res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
});