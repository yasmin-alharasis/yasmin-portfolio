<template>
  <div :class="['card', { clickable: contactInfo.type !== 'location' }]">
    <font-awesome-icon
      :icon="[contactInfo.icon['type'], contactInfo.icon['name']]"
      class="icon"
      size="lg"
    />
    <div class="info">
      <h4 class="type">{{ contactInfo.type }}</h4>
      <small>{{ contactInfo.by }}</small
      ><br />
      <small class="description">{{ contactInfo.description }}</small>
    </div>
  </div>
</template>
<script setup>
defineProps({
  contactInfo: Object,
});
</script>
<style scoped lang="scss">
@use "../assets/styles/_mixins" as *;
@use "../assets/styles/_variables" as *;

.card {
  @include grid($columns: 1fr 4fr, $align: center);
  @include card($type: "static", $mr: 10px 0, $pa: 15px, $icon-pa: 8px);
}
.clickable:hover {
  background: rgba($primary, 0.03);
  cursor: pointer;
}
.info {
  line-height: 1.3;
}
.type {
  text-transform: capitalize;
  margin-bottom: 5px;
}
small {
  color: $secondary;
}
</style>
