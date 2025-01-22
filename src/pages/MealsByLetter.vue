<template>
<div class="container mx-auto p-8">
    <h1 class="text-[30px] font-bold text-orange-500 mb-10 text-center">Search Meals by Letter</h1>
    <div class="flex gap-4 justify-center mt-4">
        <router-link 
            :to="{name: 'byLetter', params: { letter } }" 
            v-for="letter of letterList" :key="letter"
            class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
        >
            {{ letter }}
        </router-link>
    </div>
    <Meals :meals="meals"/>
</div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store/store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute()
const letterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const meals = computed(() => store.state.mealsByLetters)

watch(route, () => {
    store.dispatch('searchMealsByLetters', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetters', route.params.letter)
})
console.log('Current letter:', route.params);

</script>
