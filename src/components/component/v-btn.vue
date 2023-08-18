<template>
  <el-button
    :type="head.btnType || 'primary'"
    size="mini"
    :class="head.cla"
    @click.stop="$emit('operateEvent', { type: 'btnChange', head })"
  >
    {{ (data && data[head.key]) || head.btnTitle }}
  </el-button>
</template>
<script>
export default {
  name: "v-btn",
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
