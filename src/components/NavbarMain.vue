<template>
  <nav class="navbar" :class="{ open: isOpen }">
    <div class="logo">
      <span class="full">Yasmin Harasis</span>
      <span class="short">YH</span>
    </div>
    <ul class="menu">
      <li class="active">
        <font-awesome-icon :icon="['far', 'home']" />
        <span>Home</span>
      </li>
      <li>
        <font-awesome-icon :icon="['far', 'user']" />
        <span>About</span>
      </li>
      <li>
        <font-awesome-icon icon="code" />
        <span>Projects</span>
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'hotjar']" />
        <span>Experience</span>
      </li>
      <li>
        <font-awesome-icon :icon="['far', 'star']" />
        <span>Testimonials</span>
      </li>
      <li>
        <font-awesome-icon :icon="['far', 'envelope']" />
        <span>Contact</span>
      </li>
    </ul>
    <button class="btn" @click="toggleTheme">
      <font-awesome-icon :icon="theme == 'dark' ? ['far', 'moon'] : ['far', 'sun']" />
    </button>
  </nav>
  <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>
  <button class="menu-btn" @click="toggleMenu">
    <span v-if="isOpen">✕</span><span v-else>☰</span>
  </button>
</template>
<script setup>
import { ref, onMounted } from "vue";
const isOpen = ref(false);
const theme = ref("dark");

// Load saved theme
onMounted(() => {
  const saved = localStorage.getItem("theme")|| "dark";
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
