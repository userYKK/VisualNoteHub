<template>
  <el-select
    v-model="value"
    placeholder="请选择"
    size="mini"
    :disabled="isDisabled"
    @change="handleChange"
  >
    <el-option
      v-for="item in options"
      :key="item[head.optionKey]"
      :label="item[head.optionTitle]"
      :value="item[head.optionKey]"
    >
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: "v-select",
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
  computed: {
    options() {
      return this.$store.state[`${this.head.key}Options`] || [];
    },
  },
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    const { head, data } = this;
    if (data) {
      this.value = data[head.key];
    }
    if (this.options?.length) return;
    this.$store.dispatch("selectOptions", {
      key: `${head.key}Options`,
      url: head.optionsApi,
      data: head.optionsParams,
    });
  },
  methods: {
    handleChange() {
      const { head, data, value: changeValue } = this;
      this.$emit("operateEvent", {
        type: "selecteChange",
        head,
        data,
        changeValue,
      });
    },
  },
};
</script>
