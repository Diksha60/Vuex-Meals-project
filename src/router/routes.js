import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import MealList from "../pages/MealsByName.vue";
import MealsByName from "../pages/MealsByName.vue";
import MealsByLetter from "../pages/MealsByLetter.vue";
import MealsByIngredient from "../pages/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import MealDetails from "../pages/MealDetails.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                name: 'home',
                path: '',
                component: Home
            },
            {
                name: 'byName',
                path: '/byName/:name?',
                component: MealsByName
            },
            {
                name: 'byIngredient',
                path: '/byIngredient/:ingredient?',
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
    {
        name: 'login',
        path: '/login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router