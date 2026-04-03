<template>
  <section class="about" id="about">
    <SectionHeader :badgeTitle="badgeTitle" :subtitle="subtitle" :description="description"/>
  </section>
</template>
<script setup>
import SectionHeader from './SectionHeader.vue';
const badgeTitle = "about me";
const subtitle = "building digital solutions";
const description = "passionate about creating exceptional user experiences through clean code and thoughtful design";
</script>
