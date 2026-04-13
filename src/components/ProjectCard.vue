<template>
  <div class="card">
    <div class="project_img">
      <img :src="project.img" :alt="project.name + ' project image'" />
    </div>

    <div class="project_content">
      <div class="line">
        <h2 class="name">{{ project.name }}</h2>

        <small class="duration">
          <font-awesome-icon :icon="['far', 'calendar']" />
          {{ project.year }}
        </small>
      </div>

      <div class="main">
        <p class="description">{{ project.description }}</p>
        <TechnologiesList :technologies="project.technologies" />
      </div>

      <div class="line">
        <div class="links">
          <a :href="project.demoLink" target="_blank" class="demo">
            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
            live demo
          </a>
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            class="social-link github"
          >
            <font-awesome-icon :icon="['fab', 'square-github']" size="2xl" />
          </a>
        </div>
        <div class="status">
          <div
            :class="[
              'circle',
              {
                online: isActiveStatus(project.status),
                offline: !isActiveStatus(project.status),
              },
            ]"
          ></div>
          <small>{{ project.status }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TechnologiesList from "./TechnologiesList.vue";
defineProps({
  project: Object,
});

const isActiveStatus = (status) => ["active", "live", "production"].includes(status);
</script>
