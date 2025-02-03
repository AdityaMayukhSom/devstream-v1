<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="overflow-hidden relative">
    <CopyToClipboard :text-to-copy="props.code" />
    <pre
      :class="`p-3 mb-5 font-monospace-only *:font-monospace-only text-base *:text-base leading-none *:leading-0 rounded-xs  *:selection:bg-emerald-200 *:selection:text-emerald-900 overflow-scroll text-gray-500 bg-code-snippet-backgroung code-snippet-pre-tag ${props.class}`"
    ><slot/></pre>
  </div>
</template>

<style>
@import "~/assets/css/main.css";

.code-snippet-pre-tag span[line]::before {
  @apply content-[attr(line)] inline-block w-5 mr-4 text-right;
}
</style>
