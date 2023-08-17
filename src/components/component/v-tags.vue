<template>
  <div>
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      :closable="!isDisabled"
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="mini"
      @keyup.enter.native="handleInputConfirm"
    >
    </el-input>
  </div>
</template>
<script>
export default {
  name: "v-tags",
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
  watch: {
    isDisabled() {
      this.visible = !this.isDisabled;
    },
  },
  computed: {
    inputVisible() {
      return this.visible;
    },
  },
  data() {
    return {
      dynamicTags: [
        "标签一标签一标签一标签一标签一标签一标签一标签一",
        "标签二",
        "标签三",
      ],
      visible: false,
      inputValue: "",
    };
  },
  mounted() {
    this.visible = !this.isDisabled;
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputValue = "";
    },
  },
};
</script>
<style lang="scss" scope>
.el-tag {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 5px 2px 0;
}
</style>
