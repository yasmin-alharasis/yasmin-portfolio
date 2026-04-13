<template>
  <section class="experience" id="experience">
    <SectionHeader
      :badgeTitle="badgeTitle"
      :subtitle="subtitle"
      :description="description"
    />
    <div class="container">
      <ExperienceItem
      v-for="item in experiences"
      :key="item.id"
      :experience="item"
    />
    </div>
  </section>
</template>
<script setup>
import SectionHeader from "./SectionHeader.vue";
import ExperienceItem from "./ExperienceItem.vue";
const badgeTitle = "career journey";
const subtitle = "Professional Experience";
const description = "A timeline of my growth and contributions in the tech industry";
const experiences = [
  {
    id: 1,
    position: "software engineer",
    company: "gryphon academy pvt. ltd.",
    place: "baner, pune",
    role:
      "building innovative CRM solutions and web applications for educational technology.",
    achievements: [
      "built a CRM web app for lead tracking and pipeline management; reduced manual tracking by 60%",
      "implemented role-based authentication and audit logging; cut data access issues by 80%",
      "optimized reports with indexed queries and caching; improved load time from 2.8s to 0.9s",
      "in progress: unifying Sales, L&D, and Placement in a single React + Firebase CRM, centralizing data in Firestore with Firebase Auth and reducing cross-team handoffs",
      "leveraged Tailwind CSS, AOS, GSAP, and Three.js to deliver a dynamic, visually engaging UI for company's website",
      "delivered an HR attendance system using Node.js and React.js, deployed on Render, for Synergy Sphere (Dec 2024)",
      "improved site performance from 20s to 2s using PageSpeed Insights and GTmetrix",
      "ensured a fully responsive, user-friendly design across devices and screen sizes",
    ],
    technologies: ["react", "next.js", "tailwind css", "typescript"],
    duration: "08/2024 – Present",
    type: "full-time",
  },
  {
    id: 2,
    position: "Web Developer Intern",
    company: "Gryphon Academy Pvt. Ltd.",
    place: "Baner, Pune",
    role:
      "Developing and maintaining responsive web applications while learning modern development practices.",
    achievements: [
      "Developed and maintained responsive web applications using React, enhancing user experience and engagement",
      "Collaborated with cross-functional teams to design and implement new features based on feedback",
      "Optimized website performance and ensured cross-browser compatibility",
      "Managed database integration and developed backend solutions to support application functionality",
      "Utilized Google Apps Script to automate processes and improve workflow efficiency",
      "Implemented GSAP for high-performance animations, creating a dynamic and modern user interface",
      "Applied modern design principles and tools to deliver visually appealing and user-friendly applications",
    ],
    technologies: ["React", "Google Apps Script", "GSAP", "JavaScript"],
    duration: "Aug 2024 - Dec 2024",
    type: "internship",
  },
  {
    id: 3,
    position: "Web Developer Intern",
    company: "Gryphon Academy Pvt. Ltd.",
    place: "Baner, Pune",
    role:
      "Developing and maintaining responsive web applications while learning modern development practices.",
    achievements: [
      "Developed and maintained responsive web applications using React, enhancing user experience and engagement",
      "Collaborated with cross-functional teams to design and implement new features based on feedback",
      "Optimized website performance and ensured cross-browser compatibility",
      "Managed database integration and developed backend solutions to support application functionality",
      "Utilized Google Apps Script to automate processes and improve workflow efficiency",
      "Implemented GSAP for high-performance animations, creating a dynamic and modern user interface",
      "Applied modern design principles and tools to deliver visually appealing and user-friendly applications",
    ],
    technologies: ["React", "Google Apps Script", "GSAP", "JavaScript"],
    duration: "Aug 2024 - Dec 2024",
    type: "freelance",
  },
  {
    id: 4,
    position: "Web Developer Intern",
    company: "Gryphon Academy Pvt. Ltd.",
    place: "Baner, Pune",
    role:
      "Developing educational websites and creating resource hubs for students to foster learning and skill development.",
    achievements: [
      "Developed a dynamic educational website using HTML, CSS, and JavaScript",
      "User-friendly interface with a focus on accessibility",
      "Providing a resource hub for enthusiastic students, fostering learning and skill development",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "Feb 2023 - Mar 2023",
    type: "internship",
  },
];
</script>
