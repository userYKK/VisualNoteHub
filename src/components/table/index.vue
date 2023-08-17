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
          :width="head.minWidth"
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
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-drawer
      size="40%"
      :visible.sync="showDrawer"
      :append-to-body="true"
      :show-close="false"
      custom-class="drawer-box"
    >
      <el-descriptions
        class="drawer-content"
        :title="`${curData[meta.rowNameKey]}详情`"
        :column="1"
      >
        <template slot="extra">
          <i class="el-icon-edit" @click="handleEdit"></i>
        </template>
        <template v-for="head in headConf">
          <el-descriptions-item
            v-if="head.showPos.includes('drawer')"
            :key="head.key"
            :label="head.title"
            labelClassName="label-box"
          >
            <component
              :is="head.slot"
              :isDisabled="isDisabled"
              :head="head"
              :data="curData"
            >
            </component>
          </el-descriptions-item>
        </template>
      </el-descriptions>
      <div class="drawer-footer" v-if="!isDisabled">
        <el-button size="small" type="default" @click="showDrawer = false">
          取消
        </el-button>
        <el-button size="small" type="primary" @click="handleUpdate"> 确定 </el-button>
      </div>
    </el-drawer>

    <el-dialog :title="`新增${curData[meta.rowNameKey] || ''}`" :visible.sync="create">
      <el-form :model="form">
        <template v-for="head in headConf">
          <el-form-item :key="head.key" :label="head.title" :label-width="head.width">
            <component
              :is="head.slot"
              :isDisabled="isDisabled"
              :head="head"
              :data="curData"
            >
            </component>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import headConf from "@/config/head.conf";
import modules from "@/components/component";

export default {
  components: {
    ...modules,
    FilterTable: () => import("@/components/filter"),
  },
  computed: {
    meta() {
      return this.$route.meta;
    },
  },
  data() {
    return {
      showDrawer: false,
      create: false,
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
  methods: {
    handleFilter({ head, data, changeValue, type }) {
      console.log(head);
      if (["create"].includes(head.key)) {
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
    handleEdit(index, row) {
      this.isDisabled = false;
    },
    handleDelete(index, row) {},
    handleUpdate() {},
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
