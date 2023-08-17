<template>
  <span>{{ data[head.key] | converFileSize }}</span>
</template>
<script>
export default {
  name: "v-filesize",
  filters: {
    converFileSize(limit) {
      if (!limit) return limit;
      let size = "";
      if (limit < 1 * 1024) {
        // 如果小于0.1KB转化成B
        size = `${limit.toFixed(2)} B`;
      } else if (limit < 1 * 1024 * 1024) {
        // 如果小于0.1MB转化成KB
        size = `${(limit / 1024).toFixed(2)} KB`;
      } else if (limit < 1 * 1024 * 1024 * 1024) {
        // 如果小于0.1GB转化成MB
        size = `${(limit / (1024 * 1024)).toFixed(2)} MB`;
      } else {
        // 其他转化成GB
        size = `${(limit / (1024 * 1024 * 1024)).toFixed(2)} GB`;
      }

      const sizestr = `${size}`;
      const len = sizestr.indexOf(".");
      const dec = sizestr.substr(len + 1, 2);
      if (dec === "00") {
        // 当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
      }
      return sizestr;
    },
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
  },
};
</script>
