<template>
  <span>{{ value }}</span>
</template>
<script>
export default {
  name: "v-selectSpan",
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
  computed: {
    options() {
      return this.$store.state[`${this.head.key}Options`] || [];
    },
    value() {
      const { options, head, data } = this;
      const key = head.optionKey;
      return options.filter((item) => item[key] === data[head.key])[0]?.[
        head.optionTitle
      ];
    },
  },
  data() {
    return {};
  },
  mounted() {
    const { head, options, $store } = this;
    if (options?.length) return;
    $store.dispatch("selectOptions", {
      key: `${head.key}Options`,
      url: head.optionsApi,
      data: head.optionsParams,
    });
  },
};
</script>
