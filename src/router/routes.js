import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import MealsByName from "../pages/MealsByName.vue";
import MealsByLetter from "../pages/MealsByLetter.vue";
import MealsByIngredient from "../pages/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import MealDetails from "../pages/MealDetails.vue";
import Ingredients from "../pages/Ingredients.vue";
import SignUpPage from "../pages/SignUpPage.vue";

const routes = [
    {
        name: 'signUp',
        path: '/signUp',
        component: SignUpPage
    },
    {
        name: 'login',
        path: '/',
        component: LoginPage
    },
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                name: 'home',
                path: '/home',
                component: Home
            },
            {
                name: 'byName',
                path: '/byName/:name?',
                component: MealsByName
            },
            {
                name: 'ingredients',
                path: '/ingredients',
                component: Ingredients
            },
            {
                name: 'byIngredient',
                path: '/byIngredient/:ingredient',
                component: MealsByIngredient
            },
            {
                name: 'byLetter',
                path: '/byLetter/:letter?',
                component: MealsByLetter
            },
            {
                name: 'mealDetail',
                path: '/mealDetail/:id',
                component: MealDetails
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router