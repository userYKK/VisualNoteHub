<template>
  <el-image
    v-if="isDisabled || parentType === 'table'"
    @click.stop
    style="width: 50px; height: 50px"
    :src="url"
    :preview-src-list="srcList"
  >
  </el-image>
  <uploadImg v-else></uploadImg>
</template>
<script>
export default {
  name: "v-img",
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
    parentType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      url: "",
      srcList: [],
    };
  },
  mounted() {
    const { data, head } = this;
    if (!data) return;
    this.url = data[head.key];
    this.srcList = [this.url];
  },
};
</script>
