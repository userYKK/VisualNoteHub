<template>
  <el-avatar v-if="isDisabled" :size="head.avatarSize" :src="data[head.key]"></el-avatar>
  <uploadImg v-else></uploadImg>
</template>
<script>
export default {
  name: "v-avatar",
  components: {
    uploadImg: () => import("./v-uploadImg.vue"),
  },
  props: {
    head: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Object,
      default: () => {},
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
