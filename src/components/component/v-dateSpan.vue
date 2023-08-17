<template>
  <span>{{ data[head.key] | filterDate("year") }}</span>
</template>
<script>
export default {
  name: "v-dateSpan",
  filters: {
    filterDate: (timeStamp, startType) => {
      if (!timeStamp) return "";
      const getHandledValue = (num) => {
        return num < 10 ? `0${num}` : num;
      };
      const d = new Date(timeStamp);
      const year = d.getFullYear();
      const month = getHandledValue(d.getMonth() + 1);
      const date = getHandledValue(d.getDate());
      const hours = getHandledValue(d.getHours());
      const minutes = getHandledValue(d.getMinutes());
      const second = getHandledValue(d.getSeconds());
      let resStr = "";
      if (startType === "year")
        resStr = `${year}-${month}-${date} ${hours}:${minutes}:${second}`;
      else resStr = `${month}-${date} ${hours}:${minutes}`;
      return resStr;
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
