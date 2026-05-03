<template>
  <nav class="navbar" :class="{ open: isOpen }">
    <div class="logo">
      <span class="full">Yasmin Harasis</span>
      <span class="short">YH</span>
    </div>
    <ul class="menu">
      <li :class="{ active: activeSection === 'hero' }" @click="scrollTo('hero')">
        <font-awesome-icon :icon="['far', 'home']" />
        <span>Home</span>
      </li>
      <li :class="{ active: activeSection === 'about' }" @click="scrollTo('about')">
        <font-awesome-icon :icon="['far', 'user']" />
        <span>About</span>
      </li>
      <li :class="{ active: activeSection === 'projects' }" @click="scrollTo('projects')">
        <font-awesome-icon icon="code" />
        <span>Projects</span>
      </li>
      <li
        :class="{ active: activeSection === 'experience' }"
        @click="scrollTo('experience')"
      >
        <font-awesome-icon :icon="['fab', 'hotjar']" />
        <span>Experience</span>
      </li>
      <li
        :class="{ active: activeSection === 'testimonials' }"
        @click="scrollTo('testimonials')"
      >
        <font-awesome-icon :icon="['far', 'star']" />
        <span>Testimonials</span>
      </li>
      <li :class="{ active: activeSection === 'contact' }" @click="scrollTo('contact')">
        <font-awesome-icon :icon="['far', 'envelope']" />
        <span>Contact</span>
      </li>
    </ul>
    <!-- desktop -->
    <ThemeButton variant="desktop" :theme="theme" @toggle="toggleTheme" />
  </nav>
  <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>
  <button class="menu-btn" @click="toggleMenu">
    <span v-if="isOpen">✕</span><span v-else>☰</span>
  </button>
  <!-- mobile -->
  <ThemeButton variant="mobile" :theme="theme" @toggle="toggleTheme" />
  <ViewCount />
</template>
<script setup>
import { ref, onMounted } from "vue";
import ThemeButton from "@/components/ThemeButton.vue";
import ViewCount from "@/components/ViewCount.vue";
import { useScroll } from "@/composables/useScroll";
import { useActiveSection } from "@/composables/useActiveSection";
const isOpen = ref(false);
const theme = ref("dark");
const { activeSection } = useActiveSection();
const { scrollTo } = useScroll();

// Load saved theme
onMounted(() => {
  const saved = localStorage.getItem("theme") || "dark";
  if (saved) theme.value = saved;
  document.body.classList.add(saved);
});

const toggleTheme = () => {
  theme.value = theme.value == "dark" ? "light" : "dark";
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme.value);
  localStorage.setItem("theme", theme.value);
};
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
