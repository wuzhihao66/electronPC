<template>
  <div class="code-container">
    <span>工作笔记</span>
    <textarea ref="codeArea" v-model="code"></textarea>
    <button @click="copyToClipboard">复制</button>
    <button class="save" @click="writeFile()">保存</button>
  </div>
</template>

<script>
export default {
  props: {
    initialCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      code: this.initialCode,
    };
  },
  async mounted() {
    await this.readFile();
  },
  methods: {
    copyToClipboard() {
      if (this.$refs.codeArea) {
        this.$refs.codeArea.select();
        document.execCommand('copy');
        alert('代码已复制到剪贴板!');
      }
    },
    async getProjectRoot() {
      try {
        this.projectRoot = await this.$electron.ipcRenderer.invoke('get-project-root');
        console.log(this.projectRoot)
        return this.projectRoot;
      } catch (error) {
        console.error('获取项目根目录失败:', error);
      }
    },
    async readFile() {
      try {
        let parent = await this.getProjectRoot()
        const data = await this.$electron.ipcRenderer.invoke('read-file', parent+'/src/static/aui.json');
        this.code = data; // 将文件内容设置到 textarea 中
      } catch (error) {
        console.error('读取文件失败:', error);
      }
    },
    async writeFile() {
      try {
        let parent = await this.getProjectRoot()
        await this.$electron.ipcRenderer.invoke('write-file', parent+'/src/static/aui.json', this.code); // 将修改后的内容写入文件
        console.log('文件写入成功');
      } catch (error) {
        console.error('写入文件失败:', error);
      }
    },
  },
};
</script>

<style scoped>
.code-container {
  position: relative;
  display: inline-block;
  background-color: #ffffff; /* 背景颜色为白色 */
  padding: 10px;
  border-radius: 4px;
  width: 100%;
}

textarea {
  width: 100%;
  height: 100px;
  background-color: #ffffff; /* 背景颜色为白色 */
  border: 2px solid #00aaff; /* 边框颜色为天蓝色 */
  border-radius: 4px;
  padding: 10px;
  resize: none;
  font-family: monospace;
  color: #333;
}

button {
  background-color: #00aaff; /* 按钮背景颜色为天蓝色 */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.save {
  margin-left: 300px;
  background-color: #00aaff; /* 按钮背景颜色为天蓝色 */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0088cc; /* 按钮悬停时颜色为深天蓝色 */
}
</style>
