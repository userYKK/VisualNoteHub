<template>
  <el-input placeholder="请输入内容" suffix-icon="el-icon-edit" v-model="value">
  </el-input>
</template>
<script>
export default {
  name: "v-input",
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
    return { value: "" };
  },
};
</script>
