<template>
  <section class="hero">
    <h1>Hi, I'm Ahmad 👋</h1>
    <p>Frontend Developer</p>
    <button>Contact Me</button>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/mixins' as *;

.hero {
  @include flex-column;
  background-color: linear-gradient(
    to right bottom,
    rgb(3, 7, 18),
    rgb(3, 7, 18),
    rgba(31, 41, 55, 0.2)
  );
  height: 100vh;
  justify-content: center;
  width: calc(100% - 260px);
  position: absolute;
  right: 0;
}
</style>
