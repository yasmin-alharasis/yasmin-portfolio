<template>
  <section class="testimonials" id="testimonials">
    <SectionHeader
      :badgeTitle="badgeTitle"
      :subtitle="subtitle"
      :description="description"
    />
    <button class="actions_primary" @click="scrollTo('projects')">
      <font-awesome-icon :icon="['fas', 'plus']" class="icon" />
      add your testimonial
    </button>
    <div class="cards">
      <button class="arrow left" @click="prevSlide">‹</button>
      <button class="arrow right" @click="nextSlide">›</button>

      <transition name="slide-fade" mode="out-in">
        <div class="card" :key="testimonials[current].name">
          <font-awesome-icon :icon="['fas', 'quote-right']" class="icon" size="xl" />
          <div class="text">"{{ testimonials[current].text }}"</div>
          <div class="score">
            <div v-for="i in testimonials[current].score" :key="i">
              <font-awesome-icon :icon="['fas', 'star']" class="icon" />
            </div>
          </div>
          <div class="name">{{ testimonials[current].name }}</div>
          <div
            class="meta"
            v-if="testimonials[current].company || testimonials[current].role"
          >
            <small class="role">{{ testimonials[current].role }}</small>
            <span v-if="testimonials[current].company && testimonials[current].role"
              >&nbsp;/&nbsp;</span
            >
            <small class="company" v-if="testimonials[current].company">{{
              testimonials[current].company
            }}</small>
          </div>
          <small class="date">{{ testimonials[current].date }}</small>
        </div>
      </transition>

      <div class="dots">
        <span
          v-for="(item, index) in testimonials"
          :key="index"
          :class="{ active: index === current }"
          @click="goTo(index)"
        ></span>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SectionHeader from "./SectionHeader.vue";

const badgeTitle = "client love";
const subtitle = "what people say";
const description =
  "don't just take my word for it. Here's what clients, colleagues, and users have to say about working with me.";

const current = ref(0);

const testimonials = [
  {
    name: "arun nair",
    text: "excellent work on my e-commerce website!...",
    date: "mar 2026",
    role: "colleague",
    company: "",
    score: 3,
  },
  {
    name: "vikram singh",
    text: "professional and skilled developer...",
    date: "jun 2025",
    role: "",
    company: "ss",
    score: 5,
  },
  {
    name: "sneha gupta",
    text: "worked with this developer...",
    date: "nov 2024",
    role: "client",
    company: "",
    score: 2,
  },
  {
    name: "yasmin jamil",
    text: "hired for a complete website redesign...",
    date: "oct 2025",
    role: "maneger",
    company: "pandosoft",
    score: 4,
  },
];

const next = () => {
  current.value = (current.value + 1) % testimonials.length;
};

const prev = () => {
  current.value = (current.value - 1 + testimonials.length) % testimonials.length;
};

let interval;

const startAutoPlay = () => {
  interval = setInterval(next, 3000);
};

const resetInterval = () => {
  clearInterval(interval);
  startAutoPlay();
};

const nextSlide = () => {
  next();
  resetInterval();
};

const prevSlide = () => {
  prev();
  resetInterval();
};

const goTo = (index) => {
  current.value = index;
  resetInterval();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
