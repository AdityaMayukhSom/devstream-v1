<script setup lang="ts">
const footerData = [
  {
    name: "Support",
    items: [
      { name: "Pricing", link: "#" },
      { name: "Documentation", link: "#" },
      { name: "Guides", link: "#" },
      { name: "System Status", link: "#" },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "About", link: "#what-we-do" },
      { name: "Blogs", link: "/blogs" },
      { name: "Creator", link: "#" },
      { name: "Careers", link: "#" },
    ],
  },
];
</script>

<template>
  <footer
    class="pt-24 grid lg:grid-cols-4 pb-60 pl-24 gap-8 text-gray-300 border-t bg-landing-page-base border-gray-400/15"
  >
    <div v-for="data in footerData" :key="`footer-item-name-${data.name}`">
      <h5 class="font-medium text-gray-400">{{ data.name }}</h5>
      <ul class="text-lg flex flex-col gap-y-1 pt-4">
        <li v-for="item in data.items" :key="`footer-item-list-item-${data.name}-${item.name}`">
          <NuxtLink :href="item.link">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
