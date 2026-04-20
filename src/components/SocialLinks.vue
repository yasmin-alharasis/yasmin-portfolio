<template>
  <div class="social-links">
    <span class="connect" v-if="section == 'hero'">Connect with me:</span>

    <a
      href="https://github.com/yasmin-alharasis"
      target="_blank"
      class="social-link github"
    >
      <font-awesome-icon :icon="['fab', 'square-github']" size="2xl" />
    </a>

    <a
      href="https://www.linkedin.com/in/yasmin-al-harasis/"
      target="_blank"
      class="social-link linkedin"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" />
    </a>
  </div>
</template>
<script setup>
defineProps({
  section: String,
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/_media" as *;
@use "../assets/styles/_variables" as *;
@use "../assets/styles/_mixins" as *;

.social-links {
  .connect {
    color: $secondary;
    margin-right: 20px;
  }
  .social-link {
    @include social-link($fs: 22px);
  }
}
// Mobile
@include mobile {
  .social-links {
    .social-link {
      font-size: 15px;
    }
  }
}
</style>
