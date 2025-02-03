<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
const navbarData = [
  { name: "Home", link: "/" },
  { name: "Company", link: "#" },
  { name: "Resources", link: "#" },
  { name: "Careers", link: "#" },
];
</script>

<template>
  <nav class="flex flex-col justify-start sticky h-screen top-0 py-10 px-14 text-lg border-r border-gray-400/15">
    <ul class="flex flex-col gap-y-1">
      <li v-for="data in navbarData" class="flex gap-x-3 items-center" :key="data.name">
        <ChevronRightIcon class="size-5" />
        <!-- <Image src={ArrowHead} alt="arrowhead icon for nav menus" className="invert" height={12} /> -->
        <NuxtLink :href="data.link">{{ data.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
