<template>
  <div>
    <el-radio v-model="value" label="1" v-for="item in head.radioList" :key="item.id">
      {{ item.text }}
    </el-radio>
  </div>
</template>
<script>
export default {
  name: "v-radio",
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
  data() {
    return { value: "" };
  },
};
</script>
