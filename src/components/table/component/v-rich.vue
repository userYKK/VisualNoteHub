<template>
  <el-avatar :size="head.avatarSize" :src="data[head.key]"></el-avatar>
</template>
<script>
export default {
  name: "v-rich",
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
