<script setup>
defineProps({
  variant: String, // mobile | desktop
  theme: String
})

defineEmits(['toggle'])
</script>

<template>
  <button :class="['theme-btn', variant]" @click="$emit('toggle')">
    <font-awesome-icon
      :icon="theme === 'dark' ? ['far','moon'] : ['far','sun']"
    />
  </button>
</template>