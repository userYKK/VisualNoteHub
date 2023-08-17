<template>
  <div v-if="hasOneShowingChild(menuItem.children, menuItem) && !onlyOneChild.children">
    <el-menu-item :index="onlyOneChild.meta.activeMenu">
      <i :class="onlyOneChild.meta.cla"></i>
      <span slot="title">{{ onlyOneChild.meta.title }}</span>
    </el-menu-item>
  </div>
  <el-submenu v-else :index="meta.activeMenu">
    <template slot="title" v-if="meta.title">
      <i :class="meta.cla"></i>
      <span slot="title">{{ meta.title }}</span>
    </template>
    <template v-if="menuItem.category">
      <SideBarItemGroup
        v-for="(childMenuItem, childMenuIdx) of menuItem.category"
        :key="`${menuIdx}_${childMenuIdx}`"
        :menuIdx="meta.activeMenu"
        :menuItem="childMenuItem"
      ></SideBarItemGroup>
    </template>

    <template v-else-if="menuItem.children">
      <SideBarItem
        v-for="(childMenuItem, childMenuIdx) of menuItem.children"
        :key="`${menuIdx}_${childMenuIdx}`"
        :menuIdx="meta.activeMenu"
        :menuItem="childMenuItem"
      ></SideBarItem>
    </template>
  </el-submenu>
</template>
<script>
export default {
  name: "SideBarItem",
  components: {
    SideBarItemGroup: () => import("./sidebar-item-group.vue"),
  },
  computed: {
    meta() {
      return this.menuItem?.meta || {};
    },
  },
  props: {
    menuItem: {
      type: Object,
      default: () => {},
    },
    menuIdx: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      onlyOneChild: null,
    };
  },
  mounted() {},
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
  },
};
</script>
