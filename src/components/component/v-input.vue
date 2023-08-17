<template>
  <el-input v-if="isDisabled" placeholder="请输入内容" size="mini" suffix-icon="el-icon-edit" v-model="value">
  </el-input>
  <span v-else>{{value}}</span>
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
      default: false
    },
  },
  data() {
    return { value: "" };
  },
  mounted(){
    const {head, data}  = this;
    this.value = data[head.key];
  }
};
</script>
