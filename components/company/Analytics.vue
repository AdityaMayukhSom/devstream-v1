<script setup lang="ts">
type AnalyticsProps = {
  id: string;
  title: string;
  dark?: boolean;
  sticky?: boolean;
};

const { dark = false, sticky = true, title, id } = defineProps<AnalyticsProps>();
</script>

<template>
  <section
    :class="
      [
        dark ? 'bg-landing-page-base text-white/[0.87]' : 'bg-baby-pink text-gray-900/[0.95]',
        sticky ? 'sticky top-0' : '',
        'w-full min-h-screen font-medium px-24 py-32',
      ].join(' ')
    "
    :id="id"
  >
    <h2 class="text-4xl pb-16">{{ title }}</h2>
    <p class="text-3xl font-normal pr-60 leading-snug">
      <slot />
    </p>
  </section>
</template>
