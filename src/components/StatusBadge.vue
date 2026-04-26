<template>
  <div v-if="statusVisible" class="toast" :class="status">
    <span class="icon">
      <font-awesome-icon v-if="status === 'success'" :icon="['fas', 'check-circle']" />
      <font-awesome-icon v-else :icon="['fas', 'circle-exclamation']" />
    </span>

    <span class="message">
      {{ statusMessage }}
    </span>
  </div>
</template>
<script setup>
defineProps({
  statusVisible: Boolean,
  statusMessage: String,
  status: String,
});
</script>
<style scoped lang="scss">
@use "../assets/styles/_variables" as *;

.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 14px 18px;
  border-radius: 10px;
  color: $light;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 250px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  animation: slideIn 0.3s ease;
}
.toast.success {
  background: #22c55e;
}

.toast.error {
  background: #ef4444;
  color: $light;
}

.icon {
  font-size: 18px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
