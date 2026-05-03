<template>
  <section class="experience" id="experience">
    <SectionHeader
      :badgeTitle="badgeTitle"
      :subtitle="subtitle"
      :description="description"
    />
    <div class="container">
      <ExperienceItem v-for="item in experiences" :key="item.id" :experience="item" />
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getExperiences } from "@/services/experienceService";
import SectionHeader from "./SectionHeader.vue";
import ExperienceItem from "./ExperienceItem.vue";
const badgeTitle = "career journey";
const subtitle = "Professional Experience";
const description = "A timeline of my growth and contributions in the tech industry";
const experiences = ref([]);
onMounted(async () => {
  const res = await getExperiences();

  if (res.success) {
    experiences.value = res.experiences;
  }
});
</script>
