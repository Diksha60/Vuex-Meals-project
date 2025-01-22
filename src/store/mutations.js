// export function setSearchedMeals(state, meals){
//     state.SearchedMeals = meals
// }

export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}
export function setMealsByLetters(state, meals) {
    state.mealsByLetters = meals || []
}
export function setMealsByIngredients(state, meals) {
    state.mealsByIngredients = meals || []
}
export function setUsers(state, users) {
    state.users = users || []
}