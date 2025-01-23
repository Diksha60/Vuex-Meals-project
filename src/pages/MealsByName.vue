<template>
<div class="container mx-auto h-full p-8">
    <h1 class="text-[30px] font-bold text-orange-500 text-center">Search Meals by Name</h1>
    <div class="p-8">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-1 border-gray-300 w-full h-[55px] focus:ring-orange-500 focus:border-orange-500" 
            placeholder="Search for meals"
            @change="searchedMeals" 
        />
    </div>
    <Meals :meals="meals"/>
</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Meals from '../components/Meals.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore()
const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.meals.searchedMeals)

const searchedMeals = () => {
    if(keyword.value){
        store.dispatch('meals/searchMeals', keyword.value.trim())
    }
    else {
        store.commit('meals/setSearchedMeals', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name || ''
    if (keyword.value) {
        searchedMeals()
    }
})
</script>