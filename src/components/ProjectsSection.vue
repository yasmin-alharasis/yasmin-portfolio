<template>
  <section class="projects" id="projects">
    <SectionHeader
      :badgeTitle="badgeTitle"
      :subtitle="subtitle"
      :description="description"
    />
    <div class="container">
      <div class="bar">
        <div class="filter-bar">
          <button
            v-for="filter in filters"
            :key="filter"
            :class="['filter-btn', { active: activeFilter === filter }]"
            @click="setFilter(filter)"
          >
            {{ filter }}
          </button>
        </div>
        <div class="layout">
          <button
            v-for="item in layout"
            :key="item"
            @click="setLayout(item['name'])"
            :class="['layout-btn', { active: activeLayout === item['name'] }]"
          >
            <font-awesome-icon
              :icon="[item['type'], item['icon']]"
              class="icon"
              size="lg"
            />
          </button>
        </div>
      </div>
      <div :class="['projects-list', activeLayout]">
        <ProjectCard
          v-for="project in visibleProjects"
          :key="project.id"
          :project="project"
        />
      </div>
      <div v-if="!visibleProjects.length" class="empty-state">
        <font-awesome-icon :icon="['fas', 'filter']" class="icon" size="xl" />
        <h3>No projects found</h3>
        <span>Try selecting a different category </span>
      </div>
      <div class="working-together">
        <h2>Interested in working together?</h2>
        <p>Let's discuss your project and create something amazing together.</p>
        <button class="primary-btn" @click="scrollTo('contact')">start a project</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { getVisibleProjects } from "@/services/projectsService";
import { ref, onMounted, computed } from "vue";
import { useScroll } from "@/composables/useScroll";
import SectionHeader from "./SectionHeader.vue";
import ProjectCard from "./ProjectCard.vue";
const { scrollTo } = useScroll();
const activeFilter = ref("all");
const activeLayout = ref("grid");
const badgeTitle = "featured work";
const subtitle = "Projects & Case Studies";
const description = "A showcase of my recent work, from concept to deployment";
const filters = ["all", "full-stack", "web", "mobile"];
const layout = [
  { name: "grid", icon: "table-cells", type: "fas" },
  { name: "flex", icon: "list", type: "fas" },
];
const projects = ref([]);
onMounted(async () => {
  const res = await getVisibleProjects();

  if (res.success) {
    projects.value = res.projects;
  }
});
const visibleProjects = computed(() =>
  projects.value.filter(
    (p) => activeFilter.value === "all" || p.category === activeFilter.value
  )
);
function setFilter(filter) {
  activeFilter.value = filter;
}
function setLayout(layout) {
  activeLayout.value = layout;
}
</script>
