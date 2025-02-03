<script setup lang="ts">
const svgColor = "#d1d5db";
</script>

<template>
    <blockquote class="px-4 pt-4 my-4 bg-contrasting-base border-l-8 border-gray-700/50 italic text-base text-gray-300">
        <svg class="w-6 h-6 mb-2" v-bind:fill="svgColor" viewBox="796 698 200 200" v-bind:stroke="svgColor">
            <path
                d="M906.791,846.26v40.949C955.98,887.209,996,847.189,996,798v-89.208h-89.209V798h48.261 C955.052,824.609,933.402,846.26,906.791,846.26z">
            </path>
            <path
                d="M796,846.26v40.949c49.189,0,89.208-40.02,89.208-89.209v-89.208H796V798h48.26C844.26,824.609,822.612,846.26,796,846.26z ">
            </path>
        </svg>
        <slot />
    </blockquote>
</template>