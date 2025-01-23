import axios from "axios"

const state = {
    user: [],
    error: ''
}

const getters = {
    users: (state) => state.user,
    errors: (state) => state.error
}

const actions = {
    async login({ commit }, { email, password }) {
        try {
          const response = await axios.get('http://localhost:3000/user');
          const user = response.data.find((user) => user.email === email && user.password === password)
          
          if (user) {
            commit('setUser', user)
            commit('setError', null)
          } else {
            commit('setError', 'Invalid email or password')
          }
        } catch (error) {
          commit('setError', 'Login failed. Try again later.')
        }
      },
}

const mutations = {
    setUser: (state, user) => (state.user = user),
    setError: (state, error) => (state.error = error),
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}