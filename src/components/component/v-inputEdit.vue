<template>
  <div>
    <el-input
      v-if="isShow"
      @change="handleEnter"
      placeholder="请输入内容"
      suffix-icon="el-icon-edit"
      v-model="value"
    >
    </el-input>
    <span v-else @click.stop="isShow = true">{{ data[head.key] }}</span>
  </div>
</template>
<script>
export default {
  name: "v-inputEdit",
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
    return { value: "", isShow: false };
  },
  mounted() {
    if (!this.isDisabled) {
      return;
    }
    const { head, data } = this;
    this.value = data[head.key];
  },
  methods: {
    handleEnter() {
      const { head, data, value: changeValue } = this;
      if (!changeValue) {
        this.$message.warning("内容不能为空");
        this.isShow = false;
        return;
      }
      data[head.key] = changeValue;
      this.isShow = false;
      this.$emit("operateEvent", {
        type: "textChange",
        head,
        data,
        changeValue,
        cal: () => {
          this.$message.warning("修改成功");
        },
      });
    },
  },
};
</script>
