<template>
  <el-input-number
    v-if="isDisabled"
    size="mini"
    v-model="value"
    controls-position="right"
    @change="handleChange"
    :min="1"
    :max="100"
  ></el-input-number>
  <span v-else>{{value}}</span>
</template>
<script>
export default {
  name: "v-inputNumber",
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
    return {
      value: 1,
    };
  },
  mounted(){
    const {head, data}  = this;
    this.value = data[head.key];
  },
  methods: {
    handleChange() {
      const {head, data, value: changeValue}  = this;
      this.$emit('operateEvent', {type: 'inputNumberChange', head, data, changeValue, cal: ()=>{
        this.$message.warning('修改成功')
      }})
    },
  },
};
</script>
