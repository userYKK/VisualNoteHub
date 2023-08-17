<template>
  <el-link type="primary" :disabled="false" :underline="false">主要链接</el-link>
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
  },
};
</script>
