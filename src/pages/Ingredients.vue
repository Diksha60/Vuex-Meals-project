<template>
<div class="container mx-auto p-8">
    <h1 class="text-[30px] font-bold text-orange-500 mb-10 text-center">Meals by Ingredients</h1>
    <input 
            type="text" 
            v-model="keyword"
            class="rounded border-1 border-gray-300 h-[55px] w-full mb-7 focus:ring-orange-500 focus:border-orange-500" 
            placeholder="Search for ingredients" 
        />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <router-link :to="{name: 'byIngredient', params: {ingredient: ing.strIngredient}}" v-for="ing of computedIng" :key="ing.idIngredient" class="block bg-white shadow p-4 rounded mb-4">
            <h1 class="text-[18px] font-bold">{{ ing.strIngredient }}</h1>
        </router-link>
    </div>
</div>
</template>

<script setup>
import {
    computed,
    onMounted,
    ref
} from 'vue';
import axiosClint from '../axiosClint';

const keyword = ref('')
const ingredients = ref([])

const computedIng = computed(() => {
    if (!computedIng) return ingredients
    return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

onMounted(() => {
    axiosClint.get('list.php?i=list')
        .then(({
            data
        }) => {
            ingredients.value = data.meals
        })
})
</script>
