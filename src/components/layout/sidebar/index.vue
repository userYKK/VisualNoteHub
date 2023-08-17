<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    style="text-align: left"
    :collapse="isCollapse"
  >
    <SideBarItem
      v-for="(menuItem, menuIdx) of routes"
      :key="menuIdx"
      :menuIdx="`${menuIdx}`"
      :menuItem="menuItem"
    ></SideBarItem>
  </el-menu>
</template>
<script>
import { mapState } from "vuex";
import routes from "@/route";
export default {
  name: "SideBar",
  components: {
    SideBarItem: () => import("./sidebar-item.vue"),
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.sidebar.opened,
      routes: (state) => state.routes,
    }),
    routes() {
      return routes.options.routes.filter((item) => !item?.meta?.hideMenu);
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.routes, "===routes");
  },
  methods: {},
};
</script>

<style lang="scss" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
