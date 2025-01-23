<template>
<div class="p-36 flex flex-col justify-center items-center">
    <div class="p-8 shadow rounded-lg">
        <h1 class="text-[30px] text-orange-500 text-center font-bold mt-2">Sign Up</h1>
        <p class="text-[12px] text-center">Sign up to continue</p>

        <form @submit.prevent="signUp" class="mt-5 flex flex-col">
            <input 
                type="text" 
                name="name" 
                id="name"
                v-model="name" 
                placeholder="Name" 
                class="mt-4 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >
            <p v-if="errors.name" class="text-red-500 ml-2 mt-4 text-[14px]">{{ errors.name }}</p>
            <input 
                type="text" 
                name="email" 
                id="email" 
                v-model="email"
                placeholder="Email" 
                class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >
            <p v-if="errors.email" class="text-red-500 ml-2 mt-4 text-[14px]">{{ errors.email }}</p>

            <input 
                type="password" 
                name="password" 
                id="password" 
                v-model="password"
                placeholder="Password" 
                class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >

            <p v-if="errors.password" class="text-red-500 ml-2 mt-4 text-[14px]">{{ errors.password }}</p>

            <input 
                type="text" 
                name="confirmPassword" 
                id="confirmPassword" 
                v-model="confirmPassword"
                placeholder="Confirm Password" 
                class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500"
            >
            <p v-if="errors.confirmPassword" class="text-red-500 ml-2 mt-4 text-[14px]">{{ errors.confirmPassword }}</p>


            <button 
                type="submit"
                class="mt-12 py-3 bg-orange-500 rounded-md text-white font-semibold"
            >
                Sign Up
            </button>

            <div class="mt-6">
                <input type="checkbox" name="remember" id="remember">
                <label for="remember" class="text-[14.5px] ml-[6px]"> Remember Me</label>
            </div>
            <p 
                class="mt-5 text-center text-[14px] text-orange-500"
            >
                Already have an account? 
                <span>
                    <router-link class="text-blue-500 underline hover:text-orange-500 ml-[2px]" :to="{name: 'login'}">Login</router-link>
                </span>
            </p>
        </form>
    </div>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = computed(() => store.state.userSignUp.errors)

const errors = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const validateForm = () => {
    errors.value = {
        name: name.value ? '' : 'Name is required.',
        email: /^\S+@\S+\.\S+$/.test(email.value) ? '' : 'Enter a valid email.',
        password: password.value.length >= 6 ? '' : 'Password must be at least 6 characters.',
        confirmPassword:
            confirmPassword.value === password.value ? '' : 'Passwords do not match.',
    };

    return Object.values(errors.value).every((error) => !error);
};

const signUp = async () => {

    if (validateForm()) {
        store.dispatch('userSignUp/signUp', {
            name: name.value,
            email: email.value,
            password: password.value,
        })
        if (!store.state.userSignUp.errors) {
            router.push('/home');
        }
    }
    
}
</script>
