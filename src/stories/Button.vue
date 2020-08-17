<template>
  <button type="button" :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
import "./button.css";

export default {
  name: "my-button",

  props: {
    label: {
      type: String,
      required: true,
    },
  },

  computed: {
    classes() {
      return {
        "storybook-button": true,
        "storybook-button--primary": true,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
