<template>
  <div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "v-drawer",
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
  methods: {
    handleClose() {},
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
    };
  },
};
</script>
