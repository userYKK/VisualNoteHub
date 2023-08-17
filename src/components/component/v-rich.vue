<template>
  <el-avatar v-if="isDisabled" :size="head.avatarSize" :src="data[head.key]"></el-avatar>
  <div v-else v-html="data[head.key]"></div>
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
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
