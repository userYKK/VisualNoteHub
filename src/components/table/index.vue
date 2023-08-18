<template>
  <div>
    <FilterTable @operateEvent="handleFilter"></FilterTable>
    <el-table
      :data="tableData"
      @row-click="handleDetail"
      header-align="center"
      empty-text="暂无"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <template v-for="head in headConf">
        <el-table-column
          v-if="head.showPos.includes('table')"
          :key="head.key"
          :label="head.title"
          :prop="head.key"
          class="copy-btn"
          :width="head.minWidth"
          @click="copyFn"
        >
          <template slot-scope="{ row, column, $index }">
            <component
              :is="head.tableSlot"
              :isDisabled="head.tableDisabled"
              parentType="table"
              :head="head"
              :data="row"
            >
            </component>
          </template>
        </el-table-column>
      </template>
      <el-table-column align="right" fixed="right" width="160">
        <template slot="header" slot-scope="scope">
          <el-input
            @change="handleSearch"
            v-model="tableParams.search"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-popconfirm
            title="确定删除吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button @click.stop slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <Drawer
      :curData="curData"
      :value.sync="isDisabled"
      :visible.sync="showDrawer"
    ></Drawer>
    <Dialog :value.sync="isDisabled" :visible.sync="createDialog"></Dialog>
  </div>
</template>
<script>
import headConf from "@/config/head.conf";
import modules from "@/components/component";
import Clipboard from "clipboard";

export default {
  components: {
    ...modules,
    FilterTable: () => import("@/components/filter"),
    Drawer: () => import("@/components/drawer"),
    Dialog: () => import("@/components/dialog"),
  },
  computed: {
    meta() {
      return this.$route.meta;
    },
  },
  data() {
    return {
      showDrawer: false,
      createDialog: false,
      curData: {},
      headConf,
      form: {},
      isDisabled: true,
      tableData: [
        {
          plId: "d8ba58ae0fe811ee8e6c2cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/d8ba58ae0fe811ee8e6c2cf05d888f4a/67e0fffc-15ad-46fa-a0d3-d109797d63a3-2022424-144734-thumbnail.png",
          plTitle: "哔哩哔哩bilibili自动网页全屏插件下载",
          plDetail: null,
          plOrder: 0,
          plCount: 7314,
          plHot: null,
          plVal: 20,
          plComment: null,
          plFileName: "哔哩哔哩bilibili自动网页全屏插件下载js",
          plFilePath: "content/productivity/66329.html/file.js",
          plFileSize: 2688,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,哔哩哔哩bilibili自动网页全屏插件下载",
          createDate: 1650758400000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "有没有B站网页版自动全屏的插件？本文介绍的用户脚本插件帮你解决哔哩哔哩怎么自动全屏的难题",
        },
      ],
      tableParams: { search: "" },
    };
  },
  mounted() {
    // headConf.forEach((item) => {
    //   if (item.showPos.includes("table")) {
    //     this.headConf.push(item);
    //   }
    //   if (item.showPos.includes("drawer")) {
    //     this.drawerConf.push(item);
    //   }
    //   if (item.showPos.includes("search")) {
    //     this.searchConf.push(item);
    //   }
    //   if (item.showPos.includes("dialog")) {
    //     this.dialogConf.push(item);
    //   }
    // });
  },
  methods: {
    copyFn(text) {
      if (!text) return;
      const clipboard = new Clipboard(".copy-btn", {
        text: () => text,
      });
      clipboard.on("success", () => {
        this.$message({
          message: "复制成功",
          type: "success",
        });
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        this.$toast.error("当前浏览器不支持复制功能，请选中链接手动复制");
      });
      clipboard.onClick(event);
    },
    handleFilter({ head, data, changeValue, type }) {
      console.log(head);
      if (["createDialog"].includes(head.key)) {
        this[head.key] = true;
        this.isDisabled = false;
        return;
      }
      this.tableParams[head.key] = changeValue;
    },
    handleSearch() {
      console.log(this.tableParams, "===tableParams");
      this.$emit("tableSearch", this.tableParams);
    },
    handleDetail(data) {
      const { meta } = this;
      this.curData = data;
      if (this.curData[meta.rowKey] != data[meta.rowKey]) {
        this.showDrawer = !this.showDrawer;
        return;
      }
      this.showDrawer = true;
    },
    handleDelete(index, row) {},
  },
};
</script>
<style lang="scss">
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
.drawer-box {
  .el-drawer__header {
    display: none;
  }
  .el-drawer__body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    .drawer-content {
      flex: 1;
    }
    .drawer-footer {
      display: flex;
      justify-content: space-between;
    }
  }
  .label-box {
    min-width: 70px;
    display: inline-block;
    text-align: right;
  }
}
</style>
