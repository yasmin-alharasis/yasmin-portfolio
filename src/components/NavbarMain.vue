<template>
  <nav class="sidebar" :class="{ open: isOpen }">
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
    <button
      :class="['btn', isDark ? 'dark-icon' : 'light-icon']"
      @click="isDark = !isDark"
    >
      <font-awesome-icon :icon="isDark ? ['far', 'moon'] : ['far', 'sun']" />
    </button>
  </nav>
  <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>
  <button class="menu-btn" @click="toggleMenu">
    <span v-if="isOpen">✕</span><span v-else>☰</span>
  </button>
</template>
<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const isDark = ref(true);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
