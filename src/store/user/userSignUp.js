import axios from "axios"

const state = {
    users: [],
    errors: ''
}

const getters = {
    users: (state) => state.users,
    errors: (state) => state.errors
}

const actions = {
    async signUp({ commit }, user) {
        try {
            const response = await axios.post('http://localhost:3000/user', user);
            commit('setUsers', response.data);
            commit('setErrors', null);
        } catch (error) {
            commit('setErrors', error.response?.data?.message || 'Signup failed. Try again.');
        }
    },
    async login({ commit }, { email, password }) {
        try {
            const response = await axios.post('http://localhost:3000/user', { email, password });

            if (response.data && response.data.email === email && response.data && response.data.password === password) {
                commit('setUsers', response.data);
                commit('setErrors', null)
            } else {
                throw new Error('Invalid email or password');
            }
        } catch (error) {
            commit('setErrors', error.message || 'Login failed. Try again.');
        }
    },
}

const mutations = {
    setUsers: (state, users) => (state.users = users),
    setErrors: (state, errors) => (state.errors = errors),
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}