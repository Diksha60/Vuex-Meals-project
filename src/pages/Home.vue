<template>
<div class="container mx-auto p-8">
    <h1 class="text-[40px] font-bold text-orange-500">Random meals</h1>
    <Meals :meals="meals"/>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Meals from '../components/Meals.vue';
import axiosClint from '../axiosClint';


const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClint
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
})
</script>
