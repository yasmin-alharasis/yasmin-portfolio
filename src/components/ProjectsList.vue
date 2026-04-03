<template>
  <section class="projects" id="projects">
    <SectionBadge :badgeTitle="badgeTitle" />
  </section>
</template>
<script setup>
import SectionBadge from "./Badge.vue";
const badgeTitle = "featured work";
</script>
