<template>
    <div class="p-36 flex flex-col justify-center items-center">
        <div class="p-8 shadow rounded-lg">
            <h1 class="text-[30px] text-orange-500 text-center font-bold mt-2">Login</h1>
    
            <form class="mt-5 flex flex-col">
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    v-model="email"
                    placeholder="Email" 
                    class="mt-2 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
                >
                <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    v-model="password"
                    placeholder="Password" 
                    class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
                >
    
                <button 
                    type="button"
                    class="mt-12 py-3 bg-orange-500 rounded-md text-white font-semibold"
                    @click="login"
                >
                    Sign Up
                </button>
                <p class="mt-5 text-center text-[14px] text-orange-500">Don't have an account? <span><a href="#">Sign Up</a></span></p>
            </form>
        </div>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    
    const email = ref('')
    const password = ref('')
    
    const login = () => {
    
    }
    </script>
    