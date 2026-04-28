<template>
  <div class="contact-form">
    <h3 class="title">send me a message</h3>
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
          />
          <small v-if="errors.email" class="error">
            {{ errors.email }}
          </small>
        </div>
      </div>
      <div class="field">
        <label for="subject">subject *</label>
        <input
          type="subject"
          placeholder="What's this about?"
          v-model="form.subject"
          id="subject"
          :class="{ invalid: errors.subject }"
          @blur="validate"
        />
        <small v-if="errors.subject" class="error">
          {{ errors.subject }}
        </small>
      </div>
      <div class="field">
        <label for="message">message *</label>
        <textarea
          placeholder="Tell me about your project,ideas,or just say hello..."
          v-model.trim="form.message"
          maxlength="500"
          name="message"
          :class="{ invalid: errors.message }"
          @blur="validate"
        ></textarea>
        <div class="counter">{{ form.message.length || 0 }}/500</div>
        <small v-if="errors.message" class="error">
          {{ errors.message }}
        </small>
      </div>
      <input type="text" v-model="form.website" style="display: none" />
      <button type="submit" class="submit" :disabled="loading || statusVisible">
        <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" v-if="!loading" />
        <font-awesome-icon v-else :icon="['fas', 'spinner']" spin class="icon" />
        <span v-if="loading">sending ...</span>
        <span v-else>send message</span>
      </button>
    </form>
    <hr />
    <div class="line">
      <div class="contact-feature">
        <font-awesome-icon :icon="['far', 'circle-check']" class="icon" />
        <small>Usually responds within 24 hours</small>
      </div>
      <div class="contact-feature">
        <font-awesome-icon :icon="['far', 'circle-check']" class="icon" />
        <small>Free consultation available</small>
      </div>
    </div>
    <StatusBadge
      :statusVisible="statusVisible"
      :statusMessage="statusMessage"
      :status="status"
    />
  </div>
</template>
<script setup>
import {
  validateEmail,
  validateMessage,
  validateRequired,
  validateName,
} from "@/utils/validation";
import StatusBadge from "./StatusBadge.vue";
import { useToast } from "@/composables/useToast";
const { statusVisible, statusMessage, status, showToast } = useToast();
import { reactive, watch, ref } from "vue";
import { sendMessage } from "@/services/messageService";

const loading = ref(false);
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "", //  honeypot
});
const errors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const validate = () => {
  let isValid = true;
  Object.keys(errors).forEach((key) => (errors[key] = ""));
  errors.name = validateName(form.name);
  errors.email = validateEmail(form.email);
  errors.subject = validateRequired(form.subject, "Subject");
  errors.message = validateMessage(form.message, "Message");

  if (errors.name || errors.email || errors.subject || errors.message) {
    isValid = false;
  }
  return isValid;
};
const submit = async () => {
  if (loading.value) return;
  //  Honeypot (bot detection)
  if (form.website) {
    return; // bot detected 
  }
  //  Cooldown (60 ثانية)
  const lastSent = localStorage.getItem("lastMessageTime");
  const now = Date.now();

  if (lastSent && now - lastSent < 60000) {
    showToast("Please wait before sending another message ⏳", "error");
    return;
  }
  // 🚫 Daily limit (3 رسائل)
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem("messageDate");
  let count = Number(localStorage.getItem("messageCount")) || 0;

  if (savedDate !== today) {
    localStorage.setItem("messageDate", today);
    localStorage.setItem("messageCount", 0);
    count = 0;
  }
  if (count >= 3) {
    showToast("You reached the daily limit (3 messages) 🚫", "error");
    return;
  }

  if (!validate()) return;

  loading.value = true;
  try {
    const result = await sendMessage({ ...form });
    if (result.success) {
      localStorage.setItem("lastMessageTime", Date.now());
      localStorage.setItem("messageCount", count + 1);
      showToast(
        "Thanks for reaching out! I'll get back to you within 24 hours 🚀",
        "success"
      );
      close();
    } else {
      showToast("Failed to send message. Please try again.", "error");
    }
  } catch (error) {
    console.log("error", error);
    showToast("Something went wrong. Please try again later.", "error");
  } finally {
    loading.value = false;
  }
};
const clearError = (field) => {
  if (errors[field]) errors[field] = "";
};
["name", "email", "subject", "message"].forEach((field) => {
  watch(
    () => form[field],
    () => clearError(field)
  );
});
const close = () => {
  resetForm();
};
const resetForm = () => {
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
  Object.keys(errors).forEach((key) => (errors[key] = ""));
};
</script>
<style scoped lang="scss">
@use "../assets/styles/_variables" as *;
@use "../assets/styles/_mixins" as *;
@use "../assets/styles/_media" as *;

.contact-form {
  box-sizing: border-box;
  background: var(--color-bg);
  color: var(--color-text);
  border: 1px solid $light-gray;
  border-radius: 10px;
  padding: 30px;
  margin-top: 20px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
}
.title::first-letter,
label {
  text-transform: capitalize;
}
.grid {
  @include grid($columns: 1fr 1fr, $gap: 10px);
}
.field {
  @include flex($direction: column, $gap: 6px);
  margin: 20px 0;
}
input {
  @include input;
}
textarea {
  @include textarea;
}
.error {
  @include error;
}

.invalid {
  @include invalid;
}
.submit {
  @include submitBtn;
}
hr {
  @include hr;
}
.line {
  @include flex($gap: 20px);
}
.contact-feature {
  width: 100%;
  .icon {
    margin-right: 8px;
    color: $green;
  }
}
.counter {
  @include counter;
}
// Tablet
@include tablet {
}
// Mobile
@include mobile {
  @include mobile {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  .line {
    @include flex($direction: column, $gap: 20px);
  }
}
</style>
