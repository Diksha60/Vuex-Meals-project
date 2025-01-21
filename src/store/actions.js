// import axiosClint from '../axiosClint';

import axiosClint from "../axiosClint"

// export function SearchedMeals({ commit }, keyword) {
//     axiosClint.get(`search.php?s=${keyword.value}`)
//     .then(({ data }) => {
//         debugger
//         commit('setSearchedMeals', data)
//     })
// }

export function searchMeals({ commit }, keyword) {
    axiosClint.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
    })
}