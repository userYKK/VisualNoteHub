<template>
  <el-header class="header-box">
    <div class="left-box a-flex-center">
      <div class="fold-menu-icon">
        <span
          @click="handleFold"
          :class="`el-icon-s-${isCollapse ? 'unfold' : 'fold'}`"
        ></span>
      </div>
      &nbsp;
      <span>{{ pageName }}</span>
    </div>
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-avatar
          class="userinfo-box"
          shape="square"
          :size="40"
          icon="el-icon-user-solid"
        ></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.sidebar.opened,
      routes: (state) => state.routes,
    }),
    pageName() {
      return this.$route.meta.title;
    },
  },
  methods: {
    handleFold() {
      this.$store.dispatch("toggleSideBar");
    },
  },
};
</script>
<style lang="scss" scope>
$userInfoImgSize: 40px;
.header-box {
  display: flex;
  justify-content: space-between;
}
.a-flex-center {
  display: flex;
  align-items: center;
}
.fold-menu-icon {
  font-size: 20px;
  cursor: pointer;
}
.userinfo-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
}
</style>
