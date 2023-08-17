<template>
  <div>
    <el-table :data="tableData">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column
        v-for="head in headConf"
        :label="head.title"
        :prop="head.key"
        :width="head.minWidth"
      >
        <template slot-scope="{ row, column, $index }">
          <component :is="head.slot" :head="head" :data="column"> </component>
        </template>
      </el-table-column>
      <el-table-column align="right" fixed="right" width="160">
        <template slot="header" slot-scope="scope">
          <el-input v-model="tableSearch" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import headConf from "@/config/head.conf";
import modules from "./component";

export default {
  components: {
    ...modules,
  },
  data() {
    return {
      headConf,
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
        {
          plId: "3AA9BFAA7C1D42A2872394FEE540C7F9",
          plNo: null,
          typeId: "18becb090dff11eeadd02cf05d888f4a",
          typeName: "软件下载",
          blockId: "6523970AF7D146CF95F3385675F5F31D",
          blockName: "AI百宝箱",
          plImg:
            "/img/3AA9BFAA7C1D42A2872394FEE540C7F9/05450EE340E24F20AAC93FB24C0FD731.png",
          plTitle:
            "【ChatGPT升级版】问答插件“知之”助你对话AI，快人一步进入人工智能新时代！",
          plDetail: null,
          plOrder: 1,
          plCount: 115,
          plHot: 100,
          plVal: 100,
          plComment: 1,
          plFileName: "知之_V1.0.zip",
          plFilePath:
            "3AA9BFAA7C1D42A2872394FEE540C7F9/529E29130C794D1B88DE30367FA0AA8B.zip",
          plFileSize: 117536000,
          plFileHash: null,
          plKey: "ChatGPT",
          createDate: 1690706889000,
          creator: "不加",
          updateDate: 1691504222000,
          updator: null,
          info:
            " 家人们，今天我们非常激动地向大家介绍这款堪称ChatGPT升级版的AI问答插件——“知之”！这款插件是由今天不加班团队（jtbjb.com）精心打造，旨在为您提供全平台多引擎的智能问答服务。名字取自论语“知之为知之”，我们希望通过这个插件，让您在获取知识的道路上更加得心应手。“知之”插件的定位非常清晰——它是一款运行在Windows系统上的应用程序（未来将支持全平台使用，敬请期待！）。让我们来看",
        },
        {
          plId: "dc8a485a0fe811ee82912cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dc8a485a0fe811ee82912cf05d888f4a/614d5689-265b-4e38-bee0-371909256680-2022422-164236-thumbnail.png",
          plTitle: "虾皮卖家助手Shopee Fans插件",
          plDetail: null,
          plOrder: 1,
          plCount: 4610,
          plHot: null,
          plVal: 30,
          plComment: null,
          plFileName: "虾皮卖家助手Shopee Fans插件crx",
          plFilePath: "content/productivity/66326.html/file.crx",
          plFileSize: 3022150,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,虾皮卖家助手Shopee Fans插件",
          createDate: 1650585600000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "虾皮卖家助手Shopee Fans是一款不错的虾皮卖家辅助工具，这款软件支持跨境电商平台Shopee虾皮、阿里巴巴、Lazada、速卖通等多个平台。可以帮助卖家在上面对自己的商品进行全面的运用，帮助卖家进行全面的运营，对于卖家来说绝对是非常具有帮助的助手，能够极大程度的帮助用户完成独立的运营。",
        },
        {
          plId: "dc96a6f10fe811eeba802cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dc96a6f10fe811eeba802cf05d888f4a/d0ed5d32-07bd-4b11-9058-b0c7f16865d2-2022422-153404-thumbnail.png",
          plTitle: "海鹰数据(Extension)插件",
          plDetail: null,
          plOrder: 2,
          plCount: 6386,
          plHot: null,
          plVal: 30,
          plComment: null,
          plFileName: "海鹰数据(Extension)插件crx",
          plFilePath: "content/productivity/66325.html/file.crx",
          plFileSize: 816456,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,海鹰数据(Extension)插件",
          createDate: 1650585600000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info: "海鹰数据(Extension)是一款可以帮助商家 选产品，找货源的浏览器插件",
        },
        {
          plId: "dca36c8a0fe811ee8c302cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dca36c8a0fe811ee8c302cf05d888f4a/14c437a1-9807-4ebf-8a11-2e2c0eb9d895-2022422-150810-thumbnail.png",
          plTitle: "跨贸云ERP采集助手插件",
          plDetail: null,
          plOrder: 3,
          plCount: 3858,
          plHot: null,
          plVal: 20,
          plComment: null,
          plFileName: "跨贸云ERP采集助手插件crx",
          plFilePath: "content/productivity/66324.html/file.crx",
          plFileSize: 250348,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,跨贸云ERP采集助手插件",
          createDate: 1650585600000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "跨贸云ERP采集助手插件是一款由service发布的免费生产力扩展，可支持淘宝、速卖通、1688、天猫、eBay等站点的产品采集，采集后可发布到多平台多店铺。",
        },
        {
          plId: "dcacbc2c0fe811ee81fc2cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dcacbc2c0fe811ee81fc2cf05d888f4a/a0066383-dd4c-432f-9d20-b125ecb8ae05-2022422-144437-thumbnail.png",
          plTitle: "AliPrice卖家助手插件",
          plDetail: null,
          plOrder: 4,
          plCount: 4899,
          plHot: null,
          plVal: 30,
          plComment: null,
          plFileName: "AliPrice卖家助手插件crx",
          plFilePath: "content/productivity/66323.html/file.crx",
          plFileSize: 3117260,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,AliPrice卖家助手插件",
          createDate: 1650585600000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "AliPrice以图搜货方便您在1б88、TB、拼多多、义乌购、AE、eBay、虾皮、京东、搜款网上找货源。",
        },
        {
          plId: "dcb652630fe811ee889e2cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dcb652630fe811ee889e2cf05d888f4a/edb65f8f-6c54-414a-88f3-bd4a6a513d96-2022422-142001-thumbnail.png",
          plTitle: "采集助手插件",
          plDetail: null,
          plOrder: 5,
          plCount: 5586,
          plHot: null,
          plVal: 30,
          plComment: null,
          plFileName: "采集助手插件crx",
          plFilePath: "content/productivity/66322.html/file.crx",
          plFileSize: 1442810,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,采集助手插件",
          createDate: 1650585600000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "云栈官方出品，支持在多平台采集，采集后可刊登至多个平台多个店铺，提高商品发布效率。",
        },
        {
          plId: "dcc0188f0fe811eea8882cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dcc0188f0fe811eea8882cf05d888f4a/13999b6d-fad0-4947-afb5-8fd49551f4ed-2022317-164614-thumbnail.png",
          plTitle: "Library Extension(图书馆扩展) 插件",
          plDetail: null,
          plOrder: 6,
          plCount: 6084,
          plHot: null,
          plVal: 20,
          plComment: null,
          plFileName: "Library Extension(图书馆扩展) 插件crx",
          plFilePath: "content/productivity/66312.html/file.crx",
          plFileSize: 272246,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,Library Extension(图书馆扩展) 插件",
          createDate: 1647475200000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "Library Extension图书馆扩展是一个免费的搜索工具扩展，看到即时可用信息的书籍，音乐，和有声读物从您的公共图书馆，当您浏览各种网站。",
        },
        {
          plId: "dcc9b78b0fe811eebb222cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dcc9b78b0fe811eebb222cf05d888f4a/bbfe7d5c-987d-4784-b238-146d2294dcbc-2022317-172007-thumbnail.png",
          plTitle: "HighlightNow插件 - 网页笔记插件",
          plDetail: null,
          plOrder: 7,
          plCount: 4601,
          plHot: null,
          plVal: 20,
          plComment: null,
          plFileName: "HighlightNow插件 - 网页笔记插件crx",
          plFilePath: "content/productivity/66249.html/file.crx",
          plFileSize: 108750,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,HighlightNow插件 - 网页笔记插件",
          createDate: 1647475200000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "HighlightNow插件可以快速保存网页上的文本内容，当你下次点击这条笔记时，可以直接跳转到该网页的指定位置。",
        },
        {
          plId: "dcd355f00fe811ee84bb2cf05d888f4a",
          plNo: null,
          typeId: "176832080dff11eeb08e2cf05d888f4a",
          typeName: "Chrome生产工具插件",
          blockId: "44533A8A23F24559A69FBEB15C188592",
          blockName: "Chrome插件",
          plImg:
            "/img/dcd355f00fe811ee84bb2cf05d888f4a/0b9d4ce6-770d-4e49-8677-771798f18818-2022315-171828-thumbnail.png",
          plTitle: "Font Picker - 网页字体识别工具Chrome插件v1.0.5下载",
          plDetail: null,
          plOrder: 8,
          plCount: 4531,
          plHot: null,
          plVal: 30,
          plComment: null,
          plFileName: "Font Picker - 网页字体识别工具Chrome插件v1.0.5下载crx",
          plFilePath: "content/productivity/66272.html/file.crx",
          plFileSize: 366142,
          plFileHash: null,
          plKey:
            "chrome插件,Chrome插件,谷歌浏览器插件,AI工具，AI绘图，GhatGPT对话，Mac软件，Windows软件，iOS软件，Android软件,提供Chrome商店中优秀的Chrome插件推荐与下载服务,是谷歌Chrome浏览器的扩展插件，使用Chrome插件可以为Chrome浏览器带来一些功能性的扩展，进而提高Chrome的使用体验。想要获得Chrome插件的方式有许多，用户可以直接在Chrome商店中下载和安装谷歌浏览器插件，也可以通过jtbjb.com来获得更加详细的介绍和优秀Chrome插件的推荐,Chrome生产工具插件,Chrome插件,Font Picker - 网页字体识别工具Chrome插件v1.0.5下载",
          createDate: 1647302400000,
          creator: "不加",
          updateDate: null,
          updator: null,
          info:
            "Font Picker 插件是一款用于 Chrome 浏览器的字体选择器，这种网页字体识别工具看起来非常的干净，使用起来也十分的简单。本文提供Font Picker网页字体识别工具Chrome插件v1.0.5版本的下载",
        },
      ],
      tableSearch: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
