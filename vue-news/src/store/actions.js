import { fetchJobsList, fetchNewsList, fetchAskList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(response => {
                console.log(response);
                commit('SET_NEWS', response.data);
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(response => {
            commit('SET_ASK', response.data);
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(response => {
                commit('SET_JOBS', response.data);
            })
            .catch(e => console.log(e));
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(e => console.log(e));
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(e => console.log(e));
    },
}