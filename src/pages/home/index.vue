<template>
  <div>
    <Table></Table>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  components: {
    Table: () => import("@/components/table"),
  },
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
