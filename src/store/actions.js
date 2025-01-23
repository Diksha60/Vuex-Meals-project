import axios from "axios"
import axiosClint from "../axiosClint"

export function searchMeals({ commit }, keyword) {
    axiosClint.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
    })
}
export function searchMealsByLetters({ commit }, letter) {
    axiosClint.get(`search.php?f=${letter}`)
    .then(({ data }) => {
        commit('setMealsByLetters', data.meals)
    })
}
export function searchMealsByIngredients({ commit }, ingredient) {
    axiosClint.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
        commit('setMealsByIngredients', data.meals)
    })
}

export function registerUser ({ commit }, user) {
    axios.post('http://localhost:3000/user', user)
    .then(({data}) => {
        commit('setUsers', data.users)
    })
}