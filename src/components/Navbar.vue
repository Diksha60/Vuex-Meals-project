<template>
     <header class="bg-orange-500 shadow-sm">
        <div class="container mx-auto flex justify-between items-stretch h-20">
            <router-link :to="{name: 'home'}" class="inline-flex items-center h-full text-[18px] font-bold text-white transition-colors hover:bg-white hover:text-orange-500 px-5">Home</router-link>
            <div class="flex items-center gap-1">
                <router-link :to="{name: 'byName'}" class="inline-flex items-center px-4 h-full transition-colors text-white font-semibold hover:bg-white hover:text-orange-500 text-[18px]">Search Meals</router-link>
                <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-4 h-full transition-colors text-white font-semibold hover:bg-white hover:text-orange-500 text-[18px]">Meals by Letter</router-link>
                <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-4 h-full transition-colors text-white font-semibold hover:bg-white hover:text-orange-500 text-[18px]">Meals by Ingredients</router-link>
                <router-link :to="{name: 'signUp'}" class="inline-flex items-center px-4 h-full transition-colors text-white font-semibold hover:bg-white hover:text-orange-500 text-[18px]">Sign Up</router-link>
                <router-link :to="{name: 'login'}" class="inline-flex items-center px-4 h-full transition-colors text-white font-semibold hover:bg-white hover:text-orange-500 text-[18px]">Login</router-link>
            </div>
        </div>
    </header>
    </template>
    
    <script setup></script>
    