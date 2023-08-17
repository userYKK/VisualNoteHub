<template>
  <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" :disabled="isDisabled"> </el-switch>
</template>
<script>
export default {
  name: "v-switch",
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
    }
  },
  data() {
    return {
      value: true,
    };
  },
  mounted(){
    const {head, data}  = this;
    this.value = data[head.key];
  },
};
</script>
