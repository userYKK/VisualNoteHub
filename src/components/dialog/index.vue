<template>
  <el-dialog
    :title="`新增${(curData && curData[meta.rowNameKey]) || ''}`"
    :visible="show"
    :destroy-on-close="true"
    :append-to-body="true"
    @close="handleClose"
    width="80%"
  >
    <el-form :model="form">
      <el-form-item
        v-for="head in headConf"
        :key="head.key"
        :label="head.title"
        :label-width="head.width"
      >
        <component
          :is="head.defaultSlot"
          :isDisabled="value"
          :head="head"
          :data="curData"
        >
        </component>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import headConf from "@/config/head.conf";
import modules from "@/components/component";

export default {
  name: "filterTable",
  components: {
    ...modules,
  },
  watch: {
    visible(v) {
      this.show = v;
      console.log(v, "===show");
    },
    value: {
      immediate: true,
      handler(v) {
        this.headConf = headConf.filter((item) => {
          return item.showPos?.includes?.("dialog") || (!v && item.onlyEdit);
        });
        console.log(this.headConf);
      },
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    curData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    meta() {
      return this.$route.meta;
    },
  },
  data() {
    return {
      show: false,
      form: {},
      headConf: [],
    };
  },
  mounted() {
    console.log("我来了===");
    this.show = this.visible;
    this.headConf.forEach((item) => {
      this.$set(this.form, item.apiKey || item.key, item.defaultValue || "");
    });
  },
  methods: {
    handleEdit(index, row) {
      this.$emit("update:value", false);
    },
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>
<style lang="scss" scope>
.el-form-item {
  display: flex;
  align-items: top;
}
.el-form-item {
  margin-bottom: 12px;
  line-height: normal;
}
.el-form-item__label {
  width: 80px;
  line-height: 26px;
}
.el-form-item__content {
  flex: 1;
}
</style>
