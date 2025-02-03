<template>
    <NuxtLink :href="props.href" :target="props.target"
        class="border-spacing-1 border-b-2 transition-all ease-in-out duration-150 border-gray-500 hover:border-gray-100">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
        default: undefined,
        required: false
    }
})
</script>