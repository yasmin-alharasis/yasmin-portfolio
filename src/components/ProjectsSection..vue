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
      <div class="projects"></div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import SectionHeader from "./SectionHeader.vue";
const badgeTitle = "featured work";
const subtitle = "Projects & Case Studies";
const description = "A showcase of my recent work, from concept to deployment";
const filters = ["all", "web", "mobile", "fullStack"];
const layout = [
  { name: "grid", icon: "table-cells", type: "fas" },
  { name: "list", icon: "list", type: "fas" },
];
const activeFilter = ref("all");
const activeLayout = ref("grid");

function setFilter(filter) {
  activeFilter.value = filter;
}
function setLayout(layout) {
  activeLayout.value = layout;
}
</script>
