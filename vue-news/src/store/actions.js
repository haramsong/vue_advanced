import { fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    // promise
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data);
    //         })
    //         .catch(e => console.log(e));
    // },
    // async
    async FETCH_USER({ commit }, name) {
        try {
            const response = await fetchUserInfo(name);
            commit('SSET_USER', response.data);
            return response;
        } catch (e) {
            console.log(e);
        } 
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchItemInfo(id)
        commit('SET_ITEM', response.data)
        return response;
    },
    // #2
    async FETCH_LIST({ commit }, pageName) {
        // #3
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data)
        return response;
    },
}