<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
            <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-64 object-cover">
            </router-link>
            <div class="p-4">
                <h3 class="text-[20px] font-bold">{{ meal.strMeal }}</h3>
                <p class="mt-1 text-justify">{{ meal.strDescription }}</p>
                <div class="my-6">
                    <YoutubeLink :href="meal.strYoutube">Youtube</YoutubeLink>
                    <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}" class="ml-4 text-blue-500 underline">View</router-link>
                </div>
            </div>
        </div>
</template>

<script setup>
import YoutubeLink from './YoutubeLink.vue';


const { meal } = defineProps({
    meal: Object
})
</script>