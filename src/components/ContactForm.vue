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
          v-model="form.message"
          maxlength="500"
          name="message"
          :class="{ invalid: errors.message }"
          @blur="validate"
        ></textarea>
        <small v-if="errors.message" class="error">
          {{ errors.message }}
        </small>
      </div>
      <button type="submit" class="submit">
        <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
        send message
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
  </div>
</template>
<script setup>
import { reactive } from "vue";
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const errors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const validate = () => {
  console.log("validate form");
};
const submit = () => {
  if (!validate) return;
  console.log("submit -->", { ...form });
  close();
};
const close = () => {
  console.log("close form");
  resetForm();
};
const resetForm = () => {
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
  console.log("reset form");
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
  color: red;
  font-size: 0.8rem;
}

.invalid {
  border-color: red;
}
.submit {
  @include submitBtn;
}
hr {
  margin: 2rem 0;
  border: none;
  height: 1px;
  background-color: $light-gray;
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
