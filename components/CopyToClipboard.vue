<script setup lang="ts">
import { ClipboardDocumentIcon, CheckBadgeIcon } from "@heroicons/vue/24/outline";

type CopyToClipboardProps = {
  textToCopy: string;
  buttonText?: string;
  successTimeout?: number;
};
const { textToCopy, buttonText = "", successTimeout = 3000 } = defineProps<CopyToClipboardProps>();

const isCopied = ref(false);
const btnTxt = ref(buttonText);
let isCopiedTimeout: NodeJS.Timeout;

const handleCopyClick = (ev: MouseEvent) => {
  navigator.clipboard.writeText(textToCopy);

  isCopied.value = true;
  btnTxt.value = "Copied";

  clearTimeout(isCopiedTimeout);

  isCopiedTimeout = setTimeout(() => {
    isCopied.value = false;
    btnTxt.value = buttonText;
  }, successTimeout);
};
</script>

<template>
  <button
    ref="copy-to-clipboard-btn"
    @click="handleCopyClick"
    title="Click To Copy"
    class="absolute right-2 top-2 p-1 bg-slate-700/60 hover:bg-slate-700/50 transition-all ease-in-out rounded-xs cursor-pointer flex items-center"
  >
    <ClipboardDocumentIcon class="size-5 text-blue-500/90 hover:text-blue-500" v-if="!isCopied" />
    <CheckBadgeIcon class="size-5 text-blue-500/90 hover:text-blue-500" v-else />
    <span v-if="btnTxt.length > 0" class="text-xs px-1 transition-all">{{ btnTxt }}</span>
  </button>
</template>

<style scoped></style>
