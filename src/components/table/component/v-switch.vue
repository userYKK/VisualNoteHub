<template>
  <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
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
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>
