<template>
  <section class="contact" id="contact">
    <SectionHeader
      :badgeTitle="badgeTitle"
      :subtitle="subtitle"
      :description="description"
    />
    <div class="container">
      <div class="col">
        <h2 class="subtitle">Contact Information</h2>
        <ContactCard
          v-for="contact in contactsInfo"
          :key="contact.id"
          :contactInfo="contact"
        />
        <h3 class="subtitle">Follow Me</h3>
        <SocialLinks />
        <div class="status">
          <div class="line">
            <div class="dot"></div>
            <div class="title">available for work</div>
          </div>
          <small class="description"
            >I'm currently accepting new projects and would love to hear about yours.
          </small>
        </div>
      </div>
      <div class="col">hellow 2</div>
    </div>
  </section>
</template>
<script setup>
import ContactCard from "./ContactCard.vue";
import SocialLinks from "./SocialLinks.vue";
import SectionHeader from "./SectionHeader.vue";
const badgeTitle = "get in touch";
const subtitle = "let's work together";
const description =
  "ready to bring your ideas to life? I'm here to help you build something amazing.";
const contactsInfo = [
  {
    id: 1,
    type: "email",
    icon: { name: "envelope", type: "far" },
    by: "yasmin.jaalharasis@gmail.com",
    description: "Send me an email anytime",
  },
  {
    id: 2,
    type: "phone",
    icon: { name: "phone", type: "fas" },
    by: "+962799139431",
    description: "Available for calls",
  },
  {
    id: 3,
    type: "location",
    icon: { name: "location-dot", type: "fas" },
    by: "Amman, Jordan",
    description: "Open to remote opportunities",
  },
];
</script>
