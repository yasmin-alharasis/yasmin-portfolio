<template>
  <header>
    <Badge :badgeTitle="badgeTitle" />
    <h2 class="subtitle">{{ subtitle }}</h2>
    <p class="description">
      {{ description }}
    </p>
  </header>
</template>
<script setup>
import Badge from "./Badge.vue";

defineProps({
  badgeTitle: String,
  subtitle: String,
  description: String,
});
</script>
<style scoped lang="scss">
@use "../assets/styles/_variables" as *;
@use '../assets/styles/_media' as *;
@use "../assets/styles/_mixins" as *;

header {
  @include flex($direction: column, $gap: 15px, $align: center);
  .subtitle {
    font-size: 2rem;
    color: var(--color-text);
    text-transform: capitalize;
  }
  .description {
    font-size: 1.3rem;
    color: $secondary;
    line-height: 1.6;
    max-width: 750px;
    text-align: center;
    &::first-letter {
      text-transform: capitalize;
    }
  }
  // Tablet
  @include tablet {
    .subtitle {
      font-size: 1.8rem;
    }
    .description {
      font-size: 1.1rem;
    }
  }
  // Mobile
  @include mobile {
    .subtitle {
      font-size: 1.5rem;
    }
    .description {
      font-size: 1rem;
    }
  }
}
</style>
