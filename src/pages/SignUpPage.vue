<template>
<div class="p-36 flex flex-col justify-center items-center">
    <div class="p-8 shadow rounded-lg">
        <h1 class="text-[30px] text-orange-500 text-center font-bold mt-2">Sign Up</h1>
        <p class="text-[12px] text-center">Sign up to continue</p>

        <form class="mt-5 flex flex-col" @submit.prevent="signUp">
            <input 
                type="text" 
                name="name" 
                id="name"
                v-model="name" 
                placeholder="Name" 
                class="mt-4 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >
            <input 
                type="text" 
                name="email" 
                id="email" 
                v-model="email"
                placeholder="Email" 
                class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >
            <input 
                type="text" 
                name="password" 
                id="password" 
                v-model="password"
                placeholder="Password" 
                class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >
            <input 
                type="text" 
                name="confirmPassword" 
                id="confirmPassword" 
                v-model="confirmPassword"
                placeholder="Confirm Password" 
                class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >

            <button 
                type="button"
                class="mt-12 py-3 bg-orange-500 rounded-md text-white font-semibold"
                
            >
                Sign Up
            </button>

            <div class="mt-6">
                <input type="checkbox" name="remember" id="remember">
                <label for="remember"> Remember Me</label>
            </div>
            <p class="mt-5 text-center text-[14px] text-orange-500">Already have an account? <span><a href="#">Login</a></span></p>
        </form>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import store from '../store/store';

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const signUp = () => {
    const user = new URLSearchParams()
    user.append('name', this.name)
    user.append('email', this.email)
    user.append('password', this.password)
    user.append('confirmPassword', this.confirmPassword)

    store.dispatch('registerUser', user)
}
</script>
