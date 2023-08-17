import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/libs/api.request'

Vue.use(Vuex)
const requestQuee = {}
export default new Vuex.Store({
    state: {
        sidebar: { opened: true }
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
        },
        OPTION_DATA: (state, { key, data }) => {
            Vue.set(state, key, data)
        }
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },
        async selectOptions({ state, commit }, { key, url, data }) {
            const tmpUrlKey = `${url}_${Object.values(data).join(';')}`
            if ((requestQuee[tmpUrlKey] || state[key])) {
                return;
            }
            requestQuee[tmpUrlKey] = { data };
            const res = await axios.request({
                url,
                method: 'post',
                data
            })
            delete requestQuee[tmpUrlKey];
            commit('OPTION_DATA', { key, data: res.data.data.data })
        }
    }
})