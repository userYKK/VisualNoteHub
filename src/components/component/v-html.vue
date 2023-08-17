<template>
  <div v-html="value"></div>
</template>
<script>
export default {
  name: "v-html",
  props: {
    head: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Object,
      default: () => {},
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { value: "" };
  },
  mounted() {
    const { head, data } = this;
    this.value = data[head.key];
  },
};
</script>
