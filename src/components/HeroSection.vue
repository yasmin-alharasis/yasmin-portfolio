<template>
  <section class="hero" id="hero">
    <Badge :badgeTitle="badgeTitle" variant="custom" />
    <h1 class="name">Hi, I'm Yasmin Alharasis</h1>
    <h2 class="subtitle">
      Full-Stack Software Engineer crafting scalable and reliable web applications
    </h2>
    <p class="description">
      With 3+ years of experience,I design and develop modern web solutions using Vue.js, Node.js, and robust backend systems, with a strong focus on performance, clean architecture, and seamless user experience.
    </p>
    <div class="actions">
      <button class="actions_primary" @click="scrollTo('projects')">
        view my work
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon" />
      </button>
      <button class="actions_secondary" @click="scrollTo('contact')">Get In Touch</button>
    </div>

    <SocialLinks section="hero" />
  </section>
</template>
<script setup>
import { useScroll } from "@/composables/useScroll";
import SocialLinks from "./SocialLinks.vue";
import Badge from "./Badge.vue";
const { scrollTo } = useScroll();
const badgeTitle = "available for opportunities";
</script>
