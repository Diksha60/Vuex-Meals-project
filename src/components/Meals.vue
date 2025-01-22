<template>
<div class="grid grid-cols-1 gap-8 md:grid-cols-3 p-8">
    <MealItem :meal="meal" v-for="meal in meals" :key="meal.idMeal" />
</div>
<div v-if="!meals.length" class="flex justify-center text-gray-700 mb-16">
    There are no meals.
</div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Array,
        default: () => []

    }
})
</script>
