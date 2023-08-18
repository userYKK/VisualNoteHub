<template>
  <el-rate
    v-model="value"
    :colors="colors"
    :disabled="isDisabled"
    @change="handleChange"
  ></el-rate>
</template>
<script>
export default {
  name: "v-rate",
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
    initValue() {
      const { head, data } = this;
      let val = data[head.key];
      if (val < head.minRate) {
        val = head.minRate;
      }
      if (val > head.maxRate) {
        val = head.maxRate;
      }

      return Math.round(val / (head.maxRate / 5));
    },
  },
  data() {
    return {
      value: 0,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  mounted() {
    if (!this.data) return;
    this.value = this.initValue || 0;
  },
  methods: {
    handleChange() {
      const { head, data, value: changeValue } = this;
      this.$emit("operateEvent", {
        type: "rateChange",
        head,
        data,
        changeValue: changeValue * (head.maxRate / 5),
      });
    },
  },
};
</script>
