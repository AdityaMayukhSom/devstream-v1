<script setup lang="ts">
async function onEnter(el: Element, onComplete: () => void) {
  // await animate(el, { opacity: 1, x: 100, y: 100 }, { duration: 3, ease: "anticipate" });
  onComplete();
}
</script>

<template>
  <Transition :css="false" appear @enter="onEnter" @appear="onEnter">
    <section
      id="company-landing-hero-section"
      class="min-h-screen pl-24 pb-16 pt-48 text-4xl sticky top-0 bg-landing-page-base"
    >
      <p class="pb-10 leading-tight">
        We are team Devstream Inc.,
        <br />a software development firm driven by
        <br />
        technology, innovation and excellence.
      </p>
      <p class="leading-tight">
        Academic culture. Real‐world challenges.
        <br />
        The excitement of a startup. Whatever <br />
        brings you here, this is a place where <br />
        extraordinary and diverse minds come <br />
        together.
      </p>
    </section>
  </Transition>
</template>
