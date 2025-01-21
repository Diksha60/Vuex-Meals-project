<template>
    <a :href="href" target="_blank" class="p-4 rounded-md bg-red-500 text-white font-semibold">
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>