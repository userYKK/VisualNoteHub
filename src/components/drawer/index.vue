<template>
  <el-drawer
    size="60%"
    :visible="show"
    :append-to-body="true"
    :show-close="false"
    :destroy-on-close="true"
    custom-class="drawer-box"
    @close="handleClose"
  >
    {{ value }}===
    <el-descriptions
      class="drawer-content"
      :title="`${curData[meta.rowNameKey]}详情`"
      :column="1"
    >
      <template slot="extra">
        <i class="el-icon-edit" @click="handleEdit"></i>
      </template>
      <el-descriptions-item
        v-for="head in headConf"
        :key="head.key"
        :label="head.title"
        labelClassName="label-box"
      >
        <component
          :is="head.defaultSlot"
          :isDisabled="value"
          :head="head"
          :data="curData"
        >
        </component>
      </el-descriptions-item>
    </el-descriptions>
    <div class="drawer-footer" v-if="!value">
      <el-button size="small" type="default" @click="handleEdit"> 取消 </el-button>
      <el-button size="small" type="primary" @click="handleUpdate"> 确定 </el-button>
    </div>
  </el-drawer>
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
          return item.showPos?.includes?.("drawer") || (!v && item.onlyEdit);
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
      headConf: [],
    };
  },
  mounted() {
    this.show = this.visible;
  },
  methods: {
    handleEdit(index, row) {
      this.$emit("update:value", false);
    },
    handleClose() {
      this.$emit("update:visible", false);
    },
    handleUpdate() {},
  },
};
</script>
