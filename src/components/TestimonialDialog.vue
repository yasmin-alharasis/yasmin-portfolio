<template>
  <div v-if="modelValue" class="overlay" @click.self="close">
    <div class="dialog">
      <button class="close" @click="close"  :disabled="loading || statusVisible">×</button>

      <h2>share your experience</h2>
      <p class="subtitle">we'd love to hear about your experience working with us!</p>

      <form @submit.prevent="submit">
        <div class="grid">
          <div class="field">
            <label for="fname">full name *</label>
            <input
              type="text"
              placeholder="Your full name"
              v-model="form.name"
              id="fname"
              :class="{ invalid: errors.name }"
              @blur="validate"
              autocomplete="name"
            />
            <small v-if="errors.name" class="error">
              {{ errors.name }}
            </small>
          </div>

          <div class="field">
            <label for="email">email *</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              v-model="form.email"
              id="email"
              :class="{ invalid: errors.email }"
              @blur="validate"
              autocomplete="email"
            />
            <small v-if="errors.email" class="error">
              {{ errors.email }}
            </small>
          </div>

          <div class="field">
            <label for="role">your role *</label>
            <input
              type="text"
              placeholder="e.g., CEO, Developer, Designer"
              v-model="form.role"
              id="role"
              :class="{ invalid: errors.role }"
              autocomplete="off"
            />
            <small v-if="errors.role" class="error">
              {{ errors.role }}
            </small>
          </div>

          <div class="field">
            <label for="company">company *</label>
            <input
              type="text"
              placeholder="Your company name"
              v-model="form.company"
              id="company"
              :class="{ invalid: errors.company }"
              autocomplete="off"
            />
            <small v-if="errors.company" class="error">
              {{ errors.company }}
            </small>
          </div>
        </div>
        <label for="rating" class="title">rating *</label>
        <div class="rating">
          <span
            v-for="i in 5"
            :key="i"
            :class="{ active: i <= form.rating }"
            @click="form.rating = i"
          >
            <font-awesome-icon :icon="['fas', 'star']" class="icon" />
          </span>
        </div>
        <small v-if="errors.rating" class="error">
          {{ errors.rating }}
        </small>
        <div class="testimonial">
          <label for="testimonial">your testimonial *</label>
          <textarea
            placeholder="Share your experience working with us..."
            v-model.trim="form.testimonial"
            maxlength="500"
            name="testimonial"
            id="testimonial"
            :class="{ invalid: errors.testimonial }"
            @blur="validate"
            autocomplete="off"
          ></textarea>
          <div class="counter">{{ form.testimonial.length || 0 }}/500</div>
          <small v-if="errors.testimonial" class="error">
            {{ errors.testimonial }}
          </small>
        </div>
        <input type="text" v-model="form.website" style="display: none" id="website"/>
        <div class="actions">
          <button
            type="button"
            @click="close"
            class="cancel"
            :disabled="loading || statusVisible"
          >
            cancel
          </button>
          <button type="submit" class="submit" :disabled="loading || statusVisible">
            <font-awesome-icon
              :icon="['fas', 'paper-plane']"
              class="icon"
              v-if="!loading"
            />
            <font-awesome-icon v-else :icon="['fas', 'spinner']" spin class="icon" />
            <span v-if="loading">sending ...</span>
            <span v-else>submit</span>
          </button>
        </div>
        <small
          >Your testimonial will be reviewed before being published on the website.</small
        >
      </form>
      <StatusBadge
        :statusVisible="statusVisible"
        :statusMessage="statusMessage"
        :status="status"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, ref } from "vue";
import StatusBadge from "./StatusBadge.vue";
import { useToast } from "@/composables/useToast";
const { statusVisible, statusMessage, status, showToast } = useToast();
import {
  validateEmail,
  validateRequired,
  validateMessage,
  validateName,
} from "@/utils/validation";
import { submitTestimonial } from "@/services/testimonialService";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue", "submit"]);

const form = reactive({
  name: "",
  email: "",
  role: "",
  company: "",
  rating: 0,
  testimonial: "",
  website: "", //  honeypot
});
const resetForm = () => {
  form.name = "";
  form.email = "";
  form.role = "";
  form.company = "";
  form.rating = 0;
  form.testimonial = "";
  form.website = ""; 

  Object.keys(errors).forEach((key) => (errors[key] = ""));
};
const errors = reactive({
  name: "",
  email: "",
  role: "",
  company: "",
  rating: "",
  testimonial: "",
});
const loading = ref(false);

const validate = () => {
  let isValid = true;
  // reset errors
  Object.keys(errors).forEach((key) => (errors[key] = ""));

  errors.name = validateName(form.name);
  errors.email = validateEmail(form.email);
  errors.role = validateRequired(form.role, "Role");
  errors.company = validateRequired(form.company, "Company");
  errors.rating = validateRequired(form.rating, "Rating");
  errors.testimonial = validateMessage(form.testimonial, "Testimonial");

  if (
    errors.name ||
    errors.email ||
    errors.role ||
    errors.company ||
    errors.rating ||
    errors.testimonial
  ) {
    isValid = false;
  }

  return isValid;
};
const clearError = (field) => {
  if (errors[field]) errors[field] = "";
};
["name", "email", "role", "company", "rating", "testimonial"].forEach((field) => {
  watch(
    () => form[field],
    () => clearError(field)
  );
});
const close = () => {
  resetForm();
  emit("update:modelValue", false);
};

const submit = async () => {
  if (loading.value) return;
  //  Honeypot (bot detection)
  if (form.website) {
    return; // bot detected
  }
  //  Cooldown (60 ثانية)
  const lastSent = localStorage.getItem("lastTestimonialTime");
  const now = Date.now();

  if (lastSent && now - lastSent < 60000) {
    showToast("Please wait before sending another testimonial ⏳", "error");
    return;
  }

  // 🚫 Daily limit (3 رسائل)
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem("TestimonialDate");
  let count = Number(localStorage.getItem("TestimonialCount")) || 0;

  if (savedDate !== today) {
    localStorage.setItem("TestimonialDate", today);
    localStorage.setItem("TestimonialCount", 0);
    count = 0;
  }
  if (count >= 3) {
    showToast("You reached the daily limit (3 testimonial) 🚫", "error");
    return;
  }
  if (!validate()) return;
  loading.value = true;

  try {
    const result = await submitTestimonial({ ...form });
    if (result.success) {
      localStorage.setItem("lastTestimonialTime", Date.now());
      localStorage.setItem("TestimonialCount", count + 1);
      showToast("Testimonial sent successfully 🚀", "success");
      setTimeout(() => {
        close();
      }, 2500);
    } else {
      showToast("Failed to send testimonial. Please try again.", "error");
    }
  } catch (error) {
    console.log("error", error);
    showToast("Something went wrong, please try again.", "error");
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped lang="scss">
@use "../assets/styles/_mixins" as *;
@use "../assets/styles/_theme" as *;
@use "../assets/styles/_media" as *;
@use "../assets/styles/_variables" as *;

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(var(--color-bg), 0.7);
  z-index: 999;
  @include flex($justify: center, $align: center);
}
.dialog {
  background: var(--color-bg);
  color: var(--color-text);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid $light-gray;
  width: 500px;
  max-width: 90%;
  position: relative;
  @include box-shadow;
  max-height: 90vh;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  color: $secondary;
   &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
h2,
.subtitle {
  text-align: center;
  text-transform: capitalize;
}
.subtitle {
  margin: 1rem 0 2.5rem 0;
  color: $secondary;
  line-height: 1.4;
}
label {
  text-transform: capitalize;
  font-size: 0.9rem;
}
.grid {
  @include grid($columns: 1fr 1fr, $gap: 10px);
  margin: 1rem 0;
}
.field {
  @include flex($direction: column, $gap: 6px);
}
input {
  @include input;
}
textarea {
  @include textarea;
}
.rating {
  margin: 14px 0;
  span {
    font-size: 24px;
    cursor: pointer;
    color: $light-gray;
    &.active {
      color: $gold;
    }
  }
}
.testimonial {
  margin-top: 10px;
  @include flex($direction: column, $gap: 10px);
}
.actions {
  @include actions;
}
.submit {
  @include submitBtn;
}
.cancel {
  @include cancelBtn;
  &:hover {
    background-color: $light-gray;
  }
}
small {
  color: $secondary;
}
.error {
  @include error;
}

.invalid {
  @include invalid;
}
.counter {
  @include counter;
}

// Tablet
@include tablet {
}
// Mobile
@include mobile {
  .dialog {
    max-height: 85vh;
  }
  .grid {
    @include grid($columns: 1fr, $gap: 10px);
    margin: 1rem 0;
  }
}
</style>
