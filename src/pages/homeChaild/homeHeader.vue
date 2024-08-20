<template>
  <div class="header">
    <div class="content">
        <el-icon @click="min" class="button"><SemiSelect /></el-icon>
        <el-icon @click="quit" class="button"><Close /></el-icon>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        quit () {
            this.$electron.ipcRenderer.send('window-close')
        },
        min() {
            this.$electron.ipcRenderer.send('window-min')
        }
    }
}
</script>

<style lang="scss" scoped>

/* 窗口拖动区域 */
.header {
  -webkit-app-region: drag;
  width: 100%;  /* 确保拖动区域覆盖整个窗口宽度 */
  height: 36px;
  .content{
    height: 36px;
    display: flex;
    justify-content: right;
    /* 防止内容区域也可以拖动 */
    .button {
    width: 36px;
    height: 36px;
    -webkit-app-region: no-drag;
    }
  }
}
</style>