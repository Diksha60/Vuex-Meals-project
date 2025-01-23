<template>
<div class="p-36 flex flex-col justify-center items-center">
    <div class="p-8 shadow rounded-lg">
        <h1 class="text-[30px] text-orange-500 text-center font-bold mt-2">Login</h1>

        <form @submit.prevent="login" class="mt-5 flex flex-col">
            <input type="text" name="email" id="email" v-model="email" placeholder="Email" class="mt-2 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500">
            <p v-if="emailError" class="text-red-500 ml-2 mt-4 text-[14px]">{{ emailError }}</p>

            <input type="password" name="password" id="password" v-model="password" placeholder="Password" class="mt-10 bg-gray-100 border-x-0 border-t-0 border-b-[1px] w-[360px] h-[45px] focus:ring-orange-500 focus:border-orange-500">
            <p v-if="passwordError" class="text-red-500 ml-2 mt-4 text-[14px]">{{ passwordError }}</p>

            <p v-if="error" class="text-red-500 ml-2 mt-4 text-[14px]">{{ error }}</p>

            <button type="submit" class="mt-12 py-3 bg-orange-500 rounded-md text-white font-semibold">
                Login
            </button>
            <p class="mt-5 text-center text-[14px] text-orange-500">
                Don't have an account?
                <span>
                    <router-link class="text-blue-500 underline hover:text-orange-500 ml-[2px]" :to="{name: 'signUp'}">Sign Up</router-link>
                </span>
            </p>
        </form>
    </div>
</div>
</template>

<script setup>
import {
    computed,
    ref
} from 'vue';
import {
    useRouter
} from 'vue-router';
import {
    useStore
} from 'vuex';

const store = useStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const error = computed(() => store.state.userLogin.error)

const emailError = computed(() => {
    if (!email.value) return 'Email is required';
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email.value) ? '' : 'Please enter a valid email';
})

const passwordError = computed(() => {
    if (!password.value) return 'Password is required';
    return password.value.length < 6 ? 'Password must be at least 6 characters' : '';
})

const isValid = computed(() => !emailError.value && !passwordError.value)

const login = async () => {
    if (isValid.value) {
        await store.dispatch('userLogin/login', {
            email: email.value,
            password: password.value
        });
        if (!error.value) {
            router.push('/home'); // Redirect to home if login is successful
        }
    }
}
</script>
