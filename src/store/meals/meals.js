import axiosClint from "../../axiosClint"


const state = {
    searchedMeals: [],
    mealsByLetters: [],
    mealsByIngredients: [],
}

const getters = {
    searchedMeals: (state) => state.searchedMeals,
    mealsByLetters: (state) => state.mealsByLetters,
    mealsByIngredients: (state) => state.mealsByIngredients,
}

const actions = {
    searchMeals({ commit }, keyword){
        axiosClint.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
    },
    searchMealsByLetters({ commit }, letter){
        axiosClint.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealsByLetters', data.meals)
        })
    },
    searchMealsByIngredients({ commit }, ingredient){
        axiosClint.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
            commit('setMealsByIngredients', data.meals)
        })
    },
}

const mutations = {
    setSearchedMeals: (state, meals) => (state.searchedMeals = meals || []),
    setMealsByLetters: (state, meals) => (state.mealsByLetters = meals || []),
    setMealsByIngredients: (state, meals) => (state.mealsByIngredients = meals || [])
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}