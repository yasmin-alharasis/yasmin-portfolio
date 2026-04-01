<template>
  <section class="hero" id="hero">
    <div class="hero_container">
      <span class="badge" role="status">
        <font-awesome-icon :icon="['far', 'star']" class="star" />
        Available for opportunities</span
      >
      <h1 class="name">yasmin harasis</h1>
      <h2 class="subtitle">
        Turning ideas into scalable, <span>high-quality software.</span>
      </h2>
      <p class="description">
        Full-stack software engineer designing and developing modern, scalable
        applications with clean architecture and exceptional user experiences.
      </p>
      <div class="actions">
        <button class="actions_primary" @click="scrollTo('projects')">
          View My Work
          <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon" />
        </button>
        <button class="actions_secondary" @click="scrollTo('contact')">
          Get In Touch
        </button>
      </div>
      <div class="social-links">
        <span class="connect">Connect with me:</span>
        <a
          href="https://github.com/yasmin-alharasis"
          target="_blank"
          class="social-link github"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/yasmin-al-harasis/"
          target="_blank"
          class="social-link linkedin"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" />
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useScroll } from "@/composables/useScroll";
const { scrollTo } = useScroll();
</script>
