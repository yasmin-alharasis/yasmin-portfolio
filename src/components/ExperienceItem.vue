<template>
  <div class="time-line">
    <div class="col">
      <font-awesome-icon :icon="iconType" class="icon" size="lg" />
      <div class="left-line">
        <div class="line-dot"></div>
      </div>
    </div>
    <div class="experience-item">
      <div class="line">
        <h3 class="position">{{ experience.position }}</h3>
        <div class="desktop-only">
          <div class="duration">
            {{ experience.duration }}
          </div>
        </div>
      </div>
      <div class="line">
        <div class="meta">
          <div>
            <font-awesome-icon :icon="['fas', 'briefcase']" class="meta_icon" />
            <span class="company">{{ experience.company }}</span>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'briefcase']" class="meta_icon" />
            <span class="company">{{ experience.place }}</span>
          </div>
        </div>
        <div class="desktop-only">
          <div class="type">{{ experience.type }}</div>
        </div>
      </div>
      <div class="mobile_only">
        <div class="duration">
          {{ experience.duration }}
        </div>
        <div class="type">{{ experience.type }}</div>
      </div>
      <p class="role">
        {{ experience.role }}
      </p>
      <div class="achievements">
        <h4 class="achievements_title">
          <font-awesome-icon :icon="['fas', 'trophy']" class="icon" />
          key achievements
        </h4>
        <ul class="achievements_list">
          <li v-for="achievement in experience.achievements" :key="achievement.id">
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon" size="xs" />
            <span>{{ achievement }}</span>
          </li>
        </ul>
      </div>
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
