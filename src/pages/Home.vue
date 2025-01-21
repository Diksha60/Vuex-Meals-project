<template>
<div class="flex flex-col justify-center p-8">
    <div class="">
        <input type="text" class="rounded border-1 border-gray-300 w-full" placeholder="Search for meals" />
    </div>
    <div class="flex gap-4 justify-center mt-4">
        <router-link :to="{name: 'byLetter'}" v-for="letter of letters" :key="letter">{{ letter }}</router-link>
    </div>
</div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import axiosClint from '../axiosClint';


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
onMounted(async () => {
    const response = await axiosClint.get('/list.php?i=list')
    console.log(response.data)
})
</script>
