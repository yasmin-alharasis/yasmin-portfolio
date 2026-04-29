<template>
  <div class="admin-action">
    <h2>
      {{ type === "approve" ? "صفحة الموافقة" : "صفحة الرفض" }}
    </h2>

    <p v-if="loading">جاري التنفيذ...</p>
    <p>{{ id }}</p>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>

<script setup>
import { updateTestimonial } from "@/services/testimonialService";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();

const id = route.query.id?.trim();

const type = route.path.includes("approve") ? "approve" : "reject";

const loading = ref(false);
const error = ref("");
const success = ref("");

const handleAction = async () => {
  if (!id) {
    error.value = "معرف غير موجود";
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    const status = type === "approve" ? "approved" : "rejected";
    await updateTestimonial(status, id);
    success.value = type === "approve" ? "تمت الموافقة بنجاح" : "تم رفض التقييم";
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  handleAction();
});
</script>
<style scoped lang="scss">
@use "@/assets/styles/mixins" as *;
@use "@/assets/styles/variables" as *;

.admin-action {
  height: 100vh;

  @include flex(
    $direction: column,
    $gap: 20px,
    $justify: center,
    $align: center,
    $wrap: wrap
  );
  align-items: center;
  text-align: center;
}
.error,
.success {
  width: 60vw;
  height: 15vh;
}
.error {
  color: $red;
}
.success {
  color: blue;
}
</style>
