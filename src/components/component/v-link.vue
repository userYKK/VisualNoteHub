<template>
  <el-link :type="head.linkType" :disabled="isDisabled" :underline="head.linkUnderline">{{
    data[head.key]
  }}</el-link>
</template>
<script>
export default {
  name: "v-link",
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
};
</script>
