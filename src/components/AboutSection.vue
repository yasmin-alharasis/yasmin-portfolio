<template>
  <section class="about" id="about">
    <SectionHeader
      :badgeTitle="badgeTitle"
      :subtitle="subtitle"
      :description="description"
    />
    <div class="container">
      <div class="col">
        <div class="title">My Journey</div>
        <hr />
        <div class="description">
          I'm a full-stack developer with over 3 years of experience building web
          applications using Vue.js, Node.js, and modern backend technologies. I focus on
          developing responsive, reliable, and user-friendly systems.<br /><br />
          Through my work, I’ve gained hands-on experience in building features, fixing
          bugs, integrating third-party services, and improving application performance
          and user experience.<br /><br />
          I enjoy solving problems, learning new technologies, and working with teams to
          deliver clean and maintainable code.
        </div>
        <div class="list-title">What I Bring</div>
        <ul class="list">
          <li v-for="item in bringList" :key="item">
            <font-awesome-icon :icon="['far', 'circle-check']" class="icon" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <div class="col">
          <div class="title">Skills & Technologies</div>
          <hr />
          <ul class="list" v-for="item in technologiesList" :key="item">
            <li v-if="item['visible']" class="card">
              <div class="line">
                <font-awesome-icon :icon="['fas', 'code']" class="icon" />
                <div class="technology">
                  <span class="name">{{ item.name }}</span>
                  <small class="type">{{ item.type }}</small>
                </div>
                <div class="percentage">{{ item.percentage }}%</div>
              </div>
              <div class="progress-container">
                <div
                  class="progress-bar"
                  :style="{ width: item['percentage'] + '%' }"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="counts">
      <div v-for="item in counts" :key="item" class="card">
        <font-awesome-icon
          :icon="[item['icon']['type'], item['icon']['name']]"
          class="icon"
          size="xl"
        />
        <div class="title">{{ item["title"] }}</div>
        <small class="subtitle">{{ item["subtitle"] }}</small>
      </div>
    </div>
  </section>
</template>
<script setup>
import { getVisibleTechnologies } from "@/services/technologiesService";
import SectionHeader from "./SectionHeader.vue";
import { ref, onMounted } from "vue";
const badgeTitle = "about me";
const subtitle = "building digital solutions";
const description =
  "passionate about creating reliable and user-friendly applications through clean and maintainable code";
const bringList = [
  "Full-Stack Development (Vue.js & Node.js)",
  "Problem Solving & Debugging",
  "Agile Development (Scrum)",
  "API Integration & Performance Optimization",
  "Clean & Maintainable Code",
  "Team Collaboration",
];
const technologiesList = ref([]);
onMounted(async () => {
  const res = await getVisibleTechnologies();
  if (res.success) {
    technologiesList.value = res.technologies;
  }
});
const counts = [
  {
    icon: { type: "fas", name: "award" },
    title: "Full-Stack Web Development",
    subtitle: "Certified Professional",
  },
  {
    icon: { type: "fas", name: "screwdriver-wrench" },
    title: "10+",
    subtitle: "Technologies",
  },
  {
    icon: { type: "fas", name: "mug-hot" },
    title: "1000+ cups",
    subtitle: "Coffee Consumed",
  },
  {
    icon: { type: "far", name: "clock" },
    title: "3+",
    subtitle: "Years Experience",
  },
];
</script>
