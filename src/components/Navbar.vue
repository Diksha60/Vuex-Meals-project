<template>
     <header class="bg-white shadow-sm">
        <div class="container mx-auto flex justify-between items-stretch h-20">
            <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">Home</router-link>
            <div class="flex items-center gap-1">
                <router-link :to="{name: 'byName'}" class="inline-flex items-center px-4 h-full transition-colors hover:bg-blue-300">Search Meals</router-link>
                <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-4 h-full transition-colors hover:bg-blue-300">Meals by Letter</router-link>
                <router-link :to="{name: 'byIngredient'}" class="inline-flex items-center px-4 h-full transition-colors hover:bg-blue-300">Meals by Ingredients</router-link>
            </div>
        </div>
    </header>
    </template>
    
    <script setup></script>
    