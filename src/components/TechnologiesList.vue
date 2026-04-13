<template>
  <div class="technologies">
    <ul v-for="tech in technologies" :key="tech">
      <li>{{ tech }}</li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  technologies: Array,
});
</script>
<style scoped lang="scss">
@use "../assets/styles/_variables" as *;
@use "../assets/styles/_mixins" as *;

.technologies {
  @include flex($gap: 10px, $wrap: wrap);
  margin: 15px 0;
}
li {
  list-style: none;
  @include badge($bg: rgba($primary, 0.14), $color: $primary);
}
</style>
