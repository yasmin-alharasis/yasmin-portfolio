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
      <div class="col">
        <ContactForm />
      </div>
    </div>
    <hr />
    <footer class="footer">
      <div class="container">
        <div class="col">
          <div class="logo">yasmin harasis</div>
          <p class="description">
            Passionate full-stack developer creating innovative solutions and exceptional
            digital experiences.
          </p>

          <div class="social">
            <a
              href="https://github.com/yasmin-alharasis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'square-github']" />
            </a>
            <a href="https://www.linkedin.com/in/yasmin-al-harasis/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a :href="`mailto:${email}`" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['far', 'envelope']" />
            </a>
          </div>
        </div>

        <div class="col">
          <h4>Quick Links</h4>
          <ul class="links">
            <li @click="scrollTo('about')">About</li>
            <li @click="scrollTo('projects')">Projects</li>
            <li @click="scrollTo('experience')">Experience</li>
            <li @click="scrollTo('contact')">Contact</li>
          </ul>
        </div>

        <div class="col">
          <h4>Services</h4>
          <ul class="services">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Consulting</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="footer-content">
          <p>© {{ currentYear }} Yasmin Harasis</p>
          <p>
            Made with ❤️ using <span>Vue</span> • <span>Vite</span> •
            <span>Firebase</span>
          </p>
        </div>
        <button class="back-to-top" @click="scrollToTop">
          back to top <font-awesome-icon :icon="['fas', 'angle-up']" />
        </button>
      </div>
    </footer>
  </section>
</template>
<script setup>
import ContactCard from "./ContactCard.vue";
import ContactForm from "./ContactForm.vue";
import SocialLinks from "./SocialLinks.vue";
import SectionHeader from "./SectionHeader.vue";
import { useScroll } from "@/composables/useScroll";
const { scrollTo } = useScroll();

const email = import.meta.env.VITE_EMAIL;
const phone = import.meta.env.VITE_PHONE;

const badgeTitle = "get in touch";
const subtitle = "let's work together";
const description =
  "ready to bring your ideas to life? I'm here to help you build something amazing.";
const contactsInfo = [
  {
    id: 1,
    type: "email",
    icon: { name: "envelope", type: "far" },
    by: email,
    description: "Send me an email anytime",
  },
  {
    id: 2,
    type: "phone",
    icon: { name: "phone", type: "fas" },
    by: phone,
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
const currentYear = new Date().getFullYear();
const scrollToTop = () => {
  scrollTo("hero");
};
</script>
