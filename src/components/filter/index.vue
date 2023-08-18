<template>
  <div class="filter-box">
    <component
      v-for="item in filterList"
      :key="item.key"
      :is="item.defaultSlot"
      :head="item"
      @operateEvent="$emit('operateEvent', $event)"
    ></component>
  </div>
</template>
<script>
import headConf from "@/config/head.conf";
import modules from "@/components/component";

export default {
  name: "filterTable",
  components: {
    ...modules,
  },
  computed: {
    meta() {
      return this.$route.meta;
    },
    filterList() {
      return headConf.filter((item) => item.showPos?.includes?.("search"));
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scope>
.filter-box {
  margin-bottom: 10px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, 150px);
  .pos-right {
    position: absolute;
    right: 20px;
  }
}
</style>
