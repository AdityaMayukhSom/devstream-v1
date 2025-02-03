<template>
  <main
    class="min-h-svh relative w-full grid grid-cols-[auto_1fr] text-xl *:selection:bg-emerald-200 *:selection:text-emerald-900 text-white/[0.87] scroll-smooth bg-landing-page-base font-satoshi *:font-satoshi"
  >
    <CompanyNavbar />
    <section>
      <CompanyHero />
      <CompanyAnalytics title="1&emsp;What We Do" id="what-we-do">
        We are dedicated to empowering businesses by providing a wide range of services. We focus on software
        development, offering our expertise in creating robust applications. We also provide consulting services,
        helping teams optimize their workflows and adopt the best practices in the industry. Our goal is to foster a
        thriving community where developers can learn, grow, and collaborate effectively.
      </CompanyAnalytics>
      <CompanyAnalytics title="2&emsp;Who We Are" id="who-we-are" dark>
        We are dedicated to empowering businesses by providing a wide range of services. We focus on software
        development, offering our expertise in creating robust applications. We also provide consulting services,
        helping teams optimize their workflows and adopt the best practices in the industry. Our goal is to foster a
        thriving community where developers can learn, grow, and collaborate effectively.
      </CompanyAnalytics>
      <section class="sticky">
        <CompanyAnalytics title="3&emsp;How To Join" id="how-to-join" :sticky="false">
          We are dedicated to empowering businesses by providing a wide range of services. We focus on software
          development, offering our expertise in creating robust applications. We also provide consulting services,
          helping teams optimize their workflows and adopt the best practices in the industry. Our goal is to foster a
          thriving community where developers can learn, grow, and collaborate effectively.
        </CompanyAnalytics>
        <CompanyFooter />
      </section>
      <!-- <Newsletter />
      <Cards /> -->
    </section>
  </main>
</template>
