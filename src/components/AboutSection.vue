<template>
  <section class="about" id="about">
    <SectionBadge :badgeTitle="badgeTitle" />
  </section>
</template>
<script setup>
import SectionBadge from "./Badge.vue";
const badgeTitle = "about me";
</script>
