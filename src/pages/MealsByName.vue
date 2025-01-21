<template>
<div class="container mx-auto h-full">
    <div class="p-8 ">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-1 border-gray-300 w-full" 
            placeholder="Search for meals"
            @change="SearchMeals" 
        />
    </div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 p-8">
        <MealItem v-for="meal in meals" :key="meal.idMeal"/>
    </div>
</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store/store';
import { useRoute } from 'vue-router';
import YoutubeLink from '../components/YoutubeLink.vue';
import MealItem from '../components/MealItem.vue';

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
const SearchMeals = () => {
    store.dispatch('searchMeals', keyword.value)
}
onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value.trim()); // Dispatch action
    }
})
</script>