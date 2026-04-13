<template>
  <div class="time-line">
    <div class="col">
      <font-awesome-icon :icon="iconType" class="icon" size="lg" />
      <div class="left-line">
        <div class="line-dot"></div>
      </div>
    </div>
    <div class="experience-item">
      <div class="timeline-dot">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
      </div>
      <h3 class="position">{{ experience.position }}</h3>

      <div class="meta">
        <span class="company">{{ experience.company }}</span>
        <span class="dot">•</span>
        <span class="place">{{ experience.place }}</span>
        <span class="type">{{ experience.type }}</span>
      </div>

      <div class="duration">
        {{ experience.duration }}
      </div>

      <p class="role">
        {{ experience.role }}
      </p>
      <h4 class="achievements-title">key achievements</h4>
      <ul class="achievements-list">
        <li v-for="achievement in experience.achievements" :key="achievement.id">
          {{ achievement }}
        </li>
      </ul>
      <TechnologiesList :technologies="experience.technologies" />
    </div>
  </div>
</template>
<script setup>
import TechnologiesList from "./TechnologiesList.vue";
import { computed } from "vue";
const props = defineProps({
  experience: Object,
});

const iconType = computed(() => {
  if (props.experience.type === "full-time") return ["fas", "briefcase"];
  if (props.experience.type === "internship") return ["fas", "user-graduate"];
  return ["fas", "laptop-code"];
});
</script>
