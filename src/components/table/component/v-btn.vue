<template>
  <el-button type="success" size="mini">成功按钮</el-button>
</template>
<script>
export default {
  name: "v-btn",
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
