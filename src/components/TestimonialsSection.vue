<template>
  <section class="testimonials" id="testimonials">
    <SectionHeader
      :badgeTitle="badgeTitle"
      :subtitle="subtitle"
      :description="description"
    />
    <button class="actions_primary" @click="showDialog = true">
      <font-awesome-icon :icon="['fas', 'plus']" class="icon" />
      add your testimonial
    </button>
    <div class="cards">
      <button class="arrow left" @click="prevSlide" v-if="visibleTestimonials.length">
        ‹
      </button>
      <button class="arrow right" @click="nextSlide" v-if="visibleTestimonials.length">
        ›
      </button>

      <transition name="slide-fade" mode="out-in">
        <div
          class="card"
          :key="visibleTestimonials[current].name"
          v-if="visibleTestimonials.length"
        >
          <font-awesome-icon :icon="['fas', 'quote-right']" class="icon" size="xl" />
          <div class="text">"{{ visibleTestimonials[current].text }}"</div>
          <div class="score">
            <div v-for="i in visibleTestimonials[current].score" :key="i">
              <font-awesome-icon :icon="['fas', 'star']" class="icon" />
            </div>
          </div>
          <div class="name">{{ visibleTestimonials[current].name }}</div>
          <div
            class="meta"
            v-if="
              visibleTestimonials[current].company || visibleTestimonials[current].role
            "
          >
            <small class="role">{{ visibleTestimonials[current].role }}</small>
            <span
              v-if="
                visibleTestimonials[current].company && visibleTestimonials[current].role
              "
              >&nbsp;/&nbsp;</span
            >
            <small class="company" v-if="visibleTestimonials[current].company">{{
              visibleTestimonials[current].company
            }}</small>
          </div>
          <small class="date">{{ visibleTestimonials[current].date }}</small>
        </div>
      </transition>
      <h3 v-if="!visibleTestimonials.length" class="empty">No testimonials yet 🚀</h3>

      <div class="dots">
        <span
          v-for="(item, index) in visibleTestimonials"
          :key="index"
          :class="{ active: index === current }"
          @click="goTo(index)"
        ></span>
      </div>
    </div>
    <TestimonialDialog v-model="showDialog" @submit="handleSubmit" />
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import SectionHeader from "./SectionHeader.vue";
import TestimonialDialog from "./TestimonialDialog.vue";
const badgeTitle = "client love";
const subtitle = "what people say";
const description =
  "don't just take my word for it. Here's what clients, colleagues, and users have to say about working with me.";
const showDialog = ref(false);
const handleSubmit = (data) => {
  console.log("data-->", data);
};
const current = ref(0);

const testimonials = [
  {
    name: "arun nair",
    text: "excellent work on my e-commerce website!...",
    date: "mar 2026",
    role: "colleague",
    company: "",
    score: 3,
    status: "accepted",
  },
  {
    name: "vikram singh",
    text: "professional and skilled developer...",
    date: "jun 2025",
    role: "",
    company: "ss",
    score: 5,
    status: "accepted",
  },
  {
    name: "sneha gupta",
    text: "worked with this developer...",
    date: "nov 2024",
    role: "client",
    company: "",
    score: 2,
    status: "rejeted",
  },
  {
    name: "yasmin jamil",
    text: "hired for a complete website redesign...",
    date: "oct 2025",
    role: "maneger",
    company: "pandosoft",
    score: 4,
    status: "accepted",
  },
];
const visibleTestimonials = computed(() =>
  testimonials.filter((p) => p.status === "accepted")
);
const next = () => {
  if (!visibleTestimonials.value.length) return;
  current.value = (current.value + 1) % visibleTestimonials.value.length;
};
const prev = () => {
  if (!visibleTestimonials.value.length) return;
  current.value =
    (current.value - 1 + visibleTestimonials.value.length) %
    visibleTestimonials.value.length;
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
