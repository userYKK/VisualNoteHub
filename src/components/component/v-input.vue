<template>
  <el-input
    v-if="!isDisabled"
    placeholder="请输入内容"
    size="mini"
    suffix-icon="el-icon-edit"
    v-model="value"
    type="textarea"
    :rows="head.inputRows || 1"
  >
  </el-input>
  <div v-else>
    <div v-html="value" v-if="`${value}`.length < 20"></div>
    <el-popover v-else placement="top-start" width="200" trigger="hover" :content="value">
      <span class="text-ellipsis" slot="reference">{{ value }}</span>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: "v-input",
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
