<template>
  <section class="hero" id="hero">
    <Badge :badgeTitle="badgeTitle" variant="custom" />
    <h1 class="name">yasmin harasis</h1>
    <h2 class="subtitle">
      Turning ideas into scalable, <span>high-quality software.</span>
    </h2>
    <p class="description">
      Full-stack software engineer designing and developing modern, scalable applications
      with clean architecture and exceptional user experiences.
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
