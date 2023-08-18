<template>
  <div>
    <textarea
      v-if="!isDisabled && parentType !== 'table'"
      name="ckeditor"
      v-model="value"
    ></textarea>
    <el-button size="mini" v-else @click.stop="dialogVisible = true" type="default">
      查看详情
    </el-button>
    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="30%"
      :append-to-body="true"
    >
      <div v-html="value"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "v-rich",
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
    parentType: {
      type: String,
      default: "",
    },
  },
  data() {
    return { value: "", dialogVisible: false, editor: null };
  },
  mounted() {
    const { head, data } = this;
    if (data) {
      this.value = data[head.key];
    }
    this.$nextTick(() => {
      this.initCkeditor();
    });
  },
  watch: {
    isDisabled() {
      this.$nextTick(() => {
        this.initCkeditor();
      });
    },
  },
  methods: {
    initCkeditor() {
      const { isDisabled, parentType } = this;
      if (isDisabled || parentType === "table") return;

      this.editor = window.CKEDITOR.replace("ckeditor", {
        filebrowserUploadUrl: "http://testapi.teacode.top/upload/pl/img",
      });
      if (!this.editor) return;
      this.editor.on("fileUploadRequest", (evt) => {
        evt.stop();
        const editorData = evt.data.fileLoader;
        const { xhr, uploadUrl, file, fileName } = editorData;

        const formData = new FormData();
        xhr.open("POST", uploadUrl, true);
        const tmpFormData = {
          file,
          plId: "1111",
          fname: fileName,
        };
        Object.keys(tmpFormData).forEach((item) => {
          formData.append(item, tmpFormData[item]);
        });
        xhr.send(formData);
      });

      this.editor.on("fileUploadResponse", (evt) => {
        evt.stop();
        const data = evt.data;
        const fileLoader = data.fileLoader;
        const res = JSON.parse(fileLoader.xhr.responseText);
        if (!res.uploaded) {
          data.message = "上传失败";
          evt.cancel();
          return;
        }
        data.fileName = fileLoader.fileName;
        data.url = res.url;
        data.message = "上传成功";
      });
    },
  },
};
</script>
