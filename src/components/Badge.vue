<template>
  <span class="badge" :class="{ 'badge-border': variant === 'custom' }" role="status">
    <font-awesome-icon
      :icon="['far', 'star']"
      :class="{ star: variant === 'custom' }"
      :size="variant === 'custom' ? 'lg' : 'sm'"
    />
    <span class="badge-text">{{ badgeTitle }}</span>
  </span>
</template>
<script setup>
defineProps({
  badgeTitle: String,
  variant: String,
});
</script>
<style scoped lang="scss">
@use "../assets/styles/_variables" as *;
@use "../assets/styles/_mixins" as *;
.badge {
  background-color: rgba($primary, 0.2);
  color: $primary;
  border-radius: 25px;
  padding: 8px 20px;
  width: fit-content;
  margin-bottom: 15px;
  @include flex($gap: 5px, $justify: center, $align: center);
}
.badge-border {
  background-color: var(--color-badge-bg);
  color: var(--color-badge-text);
  border: 2px solid var(--color-badge-border);
  padding: 12px 18px;
}
.badge-text::first-letter {
  text-transform: capitalize;
}
.star {
  color: $primary;
  animation: star-glow-slow 3s infinite alternate;
  transition: transform 0.3s ease;
}

@keyframes star-glow-slow {
  0% {
    transform: scale(1);
    filter: brightness(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    filter: brightness(1.8);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
    opacity: 0.7;
  }
}
</style>
