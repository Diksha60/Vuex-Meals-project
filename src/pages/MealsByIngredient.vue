<template>
<div class="container mx-auto p-8">
    <Meals :meals="meals"/>
</div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store/store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredients)


onMounted(() => {
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
})
</script>
