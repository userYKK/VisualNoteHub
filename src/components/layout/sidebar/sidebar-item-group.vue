<template>
  <el-menu-item-group>
    <template slot="title">{{ menuItem.title }}</template>
    <SideBarItem
      v-for="(childMenuItem, childMenuIdx) of menuItem.children"
      :key="`${menuIdx}_${childMenuIdx}`"
      :menuIdx="`${menuIdx}_${childMenuIdx}`"
      :menuItem="childMenuItem"
    ></SideBarItem>
  </el-menu-item-group>
</template>
<script>
export default {
  name: "SideBarItemGroup",
  components: {
    SideBarItem: () => import("./sidebar-item.vue"),
  },
  computed: {},
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
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
