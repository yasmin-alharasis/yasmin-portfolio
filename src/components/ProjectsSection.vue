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
        <font-awesome-icon :icon="['fas', 'filter']" class="icon" size="xl"/>
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
import { ref, computed } from "vue";
import { useScroll } from "@/composables/useScroll";
import SectionHeader from "./SectionHeader.vue";
import ProjectCard from "./ProjectCard.vue";
const { scrollTo } = useScroll();
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
      "An AI-powered productivity tool that serves as your personal 'second brain.' It remembers context, connects your notes, tracks habits, and plans your day AI daily planning, connected thinking like a neural network, and human-first intelligence that learns your patterns.",
    technologies: ["react", "next.js", "tailwind css", "typescript"],
    demoLink: "https://bondi-website-bootstrap.netlify.app/",
    githubLink: "https://bondi-website-bootstrap.netlify.app/",
    status: "​deployment",
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
    githubLink: "",
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
    githubLink: "",
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
    githubLink: "",
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
    githubLink: "https://github.com/...",
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
    githubLink: "",
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
