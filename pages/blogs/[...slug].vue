<script setup lang="ts">
definePageMeta({});

const route = useRoute();
const { data, error, status, refresh, clear } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection("blogs").path(route.path).first();
});
</script>

<template>
  <header class="px-4 pt-4 pb-0 lg:pb-20 font-medium text-xs flex items-center bg-dark-base text-white">
    <NuxtLink href="/blogs">Blogs</NuxtLink>
    &nbsp;&gt;&nbsp;
    <p>{{ data?.title }}</p>
  </header>
  <main class="bg-dark-base text-white w-full pt-16 pb-8 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-52">
    <article class="w-full max-w-2xl leading-6 selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <ContentRenderer v-if="data" :value="data" />
      <p v-else>No Content to Show</p>
    </article>
  </main>
  <footer class="bg-dark-base text-white px-8 sm:px-12 md:px-20 lg:px-32 xl:px-52">
    <div class="border-t border-gray-700 py-6">Team Devstream.</div>
  </footer>
</template>
