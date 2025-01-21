<template>
    <div class="bg-gray-100 h-full">
        <Navbar/>
        <main class="container mx-auto">
            <router-view />
        </main>
    </div>
    </template>
    
    <script setup>
import Navbar from './Navbar.vue';

    </script>
    