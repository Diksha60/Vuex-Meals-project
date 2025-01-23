<template>
<div class="container mx-auto p-8">
    <Meals :meals="meals"/>
</div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Meals from '../components/Meals.vue';

const store = useStore()
const route = useRoute()
const meals = computed(() => store.state.meals.mealsByIngredients)


onMounted(() => {
    store.dispatch('meals/searchMealsByIngredients', route.params.ingredient)
})
</script>
