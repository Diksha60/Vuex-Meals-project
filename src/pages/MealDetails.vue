<template>
    <div class="container mx-auto h-full p-8 items-center">
        <h1 class="text-[20px] font-bold mb-4">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-[16px] py-4">
            <div >
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div >
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div >
                <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
            </div>
        </div>
        <div class="my-4 text-justify">
            <p>{{ meal.strInstructions }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-[20px] font-semibold mb-2">Ingedients</h2>
                <ul>
                   <template v-for="(el, index) in new Array(20)" :key="meal.idMeal">
                    <li v-if="meal[`strIngredient${index + 1}`]">
                        {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                    </li>
                   </template>
                </ul>
            </div>
            <div>
                <h2 class="text-[18px] font-semibold mb-2">Mesures</h2>
                <ul>
                   <template v-for="(el, index) in new Array(20)" :key="meal.idMeal">
                    <li v-if="meal[`strMeasure${index + 1}`]">
                        {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                    </li>
                   </template>
                </ul>
            </div>
            <div class="mt-8">
                <YoutubeLink :href="meal.strYoutube">Go to Youtube</YoutubeLink>
                <a 
                    :href="meal.strSource"
                    target="_blank"
                    class="ml-4 p-4 rounded-md text-indigo-600 hover:bg-indigo-500 hover:text-white transition-colors"

                >
                View Original Source</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClint from '../axiosClint';
import YoutubeLink from '../components/YoutubeLink.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClint.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
        meal.value = data.meals[0] || {}
    })
})
</script>