<template>
  <section class="hero" id="hero">
    <Badge :badgeTitle="badgeTitle" variant="custom" />
    <h1 class="name">Hi, I'm Yasmin Alharasis</h1>
    <h2 class="subtitle">
      Full-Stack Software Engineer focused on building reliable digital products and
      seamless user experiences.
    </h2>
    <p class="description">
      With 3+ years of experience, I specialize in frontend and backend engineering using
      Vue.js, Node.js, Firebase, and modern JavaScript technologies to create scalable
      platforms, payment systems, and data-driven solutions.
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
