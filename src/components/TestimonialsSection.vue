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
      <button class="arrow left" @click="prevSlide" v-if="testimonials.length">
        ‹
      </button>
      <button class="arrow right" @click="nextSlide" v-if="testimonials.length">
        ›
      </button>

      <transition name="slide-fade" mode="out-in">
        <div
          class="card"
          :key="testimonials[current].name"
          v-if="testimonials.length"
        >
          <font-awesome-icon :icon="['fas', 'quote-right']" class="icon" size="xl" />
          <div class="text">"{{ testimonials[current].testimonial }}"</div>
          <div class="score">
            <div v-for="i in testimonials[current].rating" :key="i">
              <font-awesome-icon :icon="['fas', 'star']" class="icon" />
            </div>
          </div>
          <div class="name">{{ testimonials[current].name }}</div>
          <div
            class="meta"
            v-if="
              testimonials[current].company || testimonials[current].role
            "
          >
            <small class="role">{{ testimonials[current].role }}</small>
            <span
              v-if="
                testimonials[current].company && testimonials[current].role
              "
              >&nbsp;/&nbsp;</span
            >
            <small class="company" v-if="testimonials[current].company">{{
              testimonials[current].company
            }}</small>
          </div>
          <small class="date">
            {{ testimonials[current].date }}
          </small>
        </div>
      </transition>
      <h3 v-if="!testimonials.length" class="empty">No testimonials yet 🚀</h3>

      <div class="dots">
        <span
          v-for="(item, index) in testimonials"
          :key="index"
          :class="{ active: index === current }"
          @click="goTo(index)"
        ></span>
      </div>
    </div>
    <TestimonialDialog v-model="showDialog" />
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getAcceptedTestimonials } from "@/services/testimonialService";
import SectionHeader from "./SectionHeader.vue";
import TestimonialDialog from "./TestimonialDialog.vue";
const badgeTitle = "client love";
const subtitle = "what people say";
const description =
  "don't just take my word for it. Here's what clients, colleagues, and users have to say about working with me.";
const showDialog = ref(false);

const current = ref(0);

const testimonials = ref([]);
const next = () => {
  if (!testimonials.value.length) return;
  current.value = (current.value + 1) % testimonials.value.length;
};
const prev = () => {
  if (!testimonials.value.length) return;
  current.value =
    (current.value - 1 + testimonials.value.length) %
    testimonials.value.length;
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

onMounted(async () => {
   const res = await getAcceptedTestimonials();

  if (res.success) {
    testimonials.value = res.testimonials;
  }
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
