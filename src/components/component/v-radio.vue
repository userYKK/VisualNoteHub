<template>
  <div>
    <el-radio
      v-model="value"
      label="1"
      v-for="item in head.radioList"
      :key="item.id"
      :disabled="!isDisabled"
    >
      {{ item.text }}
    </el-radio>
  </div>
</template>
<script>
export default {
  name: "v-radio",
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
    if (!data) return;
    this.value = data[head.key];
  },
};
</script>
