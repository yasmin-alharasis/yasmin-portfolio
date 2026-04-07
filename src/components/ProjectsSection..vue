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
      <div :class="['projects', activeLayout === 'grid' ? 'grid' : 'flex']">
        <div v-for="project in visibleProjects" :key="project['id']" class="card">
          {{ project["name"] }}
        </div>
        <div v-if="visibleProjects.length === 0">No projects found</div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
import SectionHeader from "./SectionHeader.vue";
const activeFilter = ref("all");
const activeLayout = ref("grid");
const badgeTitle = "featured work";
const subtitle = "Projects & Case Studies";
const description = "A showcase of my recent work, from concept to deployment";
const filters = ["all", "web", "mobile", "full-stack"];
const layout = [
  { name: "grid", icon: "table-cells", type: "fas" },
  { name: "list", icon: "list", type: "fas" },
];
const projects = ref([
  { id: 1, name: "project 1", category: "web", visible: true },
  { id: 2, name: "project 2", category: "mobile", visible: true },
  { id: 3, name: "project 3", category: "full-stack", visible: true },
  { id: 4, name: "project 4", category: "web", visible: true },
]);
const visibleProjects = computed(() =>
  projects.value.filter(
    (p) =>
      p.visible &&
      (activeFilter.value === "all" ||
        p.category === activeFilter.value)
  )
);
function setFilter(filter) {
  activeFilter.value = filter;
}
function setLayout(layout) {
  activeLayout.value = layout;
}
</script>
