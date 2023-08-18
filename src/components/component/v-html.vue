<template>
  <div>
    <div v-html="value" v-if="`${value}`.length < 20"></div>
    <el-popover v-else placement="top-start" width="200" trigger="hover" :content="value">
      <span class="text-ellipsis" slot="reference">{{ value }}</span>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: "v-html",
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
  data() {
    return { value: "" };
  },
  mounted() {
    const { head, data } = this;
    if (!data) return;
    this.value = data[head.key] || "";
  },
};
</script>
<style lang="scss" scope>
.text-ellipsis {
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
