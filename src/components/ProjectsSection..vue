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
        <div v-for="project in visibleProjects" :key="project['id']" class="card">
          <div class="project_img">
            <img :src="project['img']" :alt="project['name'] + ' project image'" />
          </div>
          <div class="project_content">
            <div class="line">
              <h2 class="name">{{ project["name"] }}</h2>
              <small class="time">
                <font-awesome-icon :icon="['far', 'calendar']" />
                {{ project["year"] }}</small
              >
            </div>
            <div class="main">
              <p class="description">{{ project["description"] }}</p>
              <div class="technology">
                <ul v-for="techno in project['technologies']" :key="techno">
                  <li>{{ techno }}</li>
                </ul>
              </div>
            </div>
            <div class="line btn">
              <a :href="project['demoLink']" target="_blank" class="demo">
                <font-awesome-icon
                  :icon="['fas', 'arrow-up-right-from-square']"
                  size="2xl"
                />
                live demo
              </a>
              <button class="actions_primary" @click="scrollTo('projects')">
                BadgeWork
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon" />
              </button>
              <small class="status">{{ project["status"] }}</small>
            </div>
          </div>
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
  { name: "flex", icon: "list", type: "fas" },
];
const projects = ref([
  {
    id: 1,
    category: "full-stack",
    visible: true,
    name: "Knest – AI-Powered Second Brain",
    year: "2025",
    img:
      "https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038=",
    description:
      "An AI-powered productivity tool that serves as your personal 'second brain.' It remembers context, connects your notes, tracks habits, and plans your day",
    technologies: ["react", "next.js", "tailwind css", "typescript"],
    demoLink: "https://bondi-website-bootstrap.netlify.app/",
    status: "active",
  },
  {
    id: 2,
    category: "web",
    visible: true,
    name: "Gryphon Academy Website",
    year: "2024",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2u8sHhGTF8bBTTe9-Ose-A13F-3096v_hNA&s",
    description:
      "A dynamic, visually engaging company website for Gryphon Academy featuring modern animations and responsive design. Leveraged Tailwind CSS, AOS, GSAP, and Three.js for high-performance animations and ensured full responsiveness across all devices.",
    technologies: ["react", "GSAP", "tailwind css", "three.js"],
    demoLink: "https://crudjs-product-management-system.netlify.app/",
    status: "live",
  },
  {
    id: 3,
    category: "web",
    visible: true,
    name: "PlayStation – Product Showcase Website",
    year: "2024",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIfvBPQK7E7Ysi4H29L2Hxei0T_NOWFaH0Q&s",
    description:
      "A modern and interactive concept website for PlayStation, featuring product displays, ergonomic controller highlights, and an engaging shopping experience.",
    technologies: ["react", "vite", "tailwind css", "javascript"],
    demoLink: "https://adidas-running-landing.netlify.app/",
    status: "active",
  },
  {
    id: 4,
    category: "web",
    visible: true,
    name: "CRM Web Application",
    year: "2025",
    img:
      "https://img.freepik.com/free-photo/close-up-diverse-business-team-exchanging-insights-forecasting-diagrams-late-night_482257-136319.jpg?semt=ais_incoming&w=740&q=80",
    description:
      "A comprehensive CRM system built for Gryphon Academy with lead tracking, pipeline management, role-based authentication, and audit logging. Features real-time",
    technologies: ["react", "firebase", "tailwind css", "three.js"],
    demoLink: "https://dark-admin-dashboard.netlify.app/",
    status: "production",
  },
  {
    id: 5,
    category: "full-stack",
    visible: true,
    name: "HR Attendance System",
    year: "2024",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaK4UVnECoCkNrICKZKjn5TeJg7ExLvGNWwg&s",
    description:
      "A complete HR attendance management system built with Node.js and React.js, deployed on Render for Synergy Sphere. Improved site performance from 20s to 2s load",
    technologies: ["react", "node.js", "render", "performance optimization"],
    demoLink: "https://trycoffee.netlify.app/",
    status: "production",
  },
  {
    id: 6,
    category: "web",
    visible: true,
    name: "ShineX – Doorstep Vehicle Washing Platform",
    year: "2025",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5zvouJDHbarXqb1QgJO7Xy9m2P1h3-IbfQ&s",
    description:
      "A premium vehicle-washing platform that brings professional car and bike cleaning services directly to your doorstep. Emphasizes eco-friendly washing, convenienc",
    technologies: ["react", "vite", "tailwind css", "emailjs"],
    demoLink: "https://trycoffee.netlify.app/",
    status: "active",
  },
]);
const visibleProjects = computed(() =>
  projects.value.filter(
    (p) =>
      p.visible && (activeFilter.value === "all" || p.category === activeFilter.value)
  )
);
function setFilter(filter) {
  activeFilter.value = filter;
}
function setLayout(layout) {
  activeLayout.value = layout;
}
</script>
