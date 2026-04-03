<template>
  <section class="testimonials" id="testimonials">
    <SectionBadge :badgeTitle="badgeTitle" />
  </section>
</template>
<script setup>
import SectionBadge from "./Badge.vue";
const badgeTitle = "client love";
</script>
