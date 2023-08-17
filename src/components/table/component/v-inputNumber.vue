<template>
  <el-input-number
    v-model="value"
    controls-position="right"
    @change="handleChange"
    :min="1"
    :max="100"
  ></el-input-number>
</template>
<script>
export default {
  name: "v-inputNumber",
  props: {
    head: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
