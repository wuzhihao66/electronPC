<template>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">展开</el-radio-button>
      <el-radio-button :value="true">收缩</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      v-model="$sdm.tabs.homeName"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>记事本</span>
        </template>
        <el-menu-item-group>
          <template #title><span>环境</span></template>
          <el-menu-item index="workNode">工作笔记</el-menu-item>
          <el-menu-item index="homeNode">自用笔记</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="小工具">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>json在线转换</span></template>
          <el-menu-item index="1-4-1">base64生成</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>环境</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>小工具</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>其它</template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
import { ref, watch, getCurrentInstance, onMounted } from 'vue';

  const { appContext } = getCurrentInstance()!;
  const sdm = appContext.config.globalProperties.$sdm;
  const isCollapse = ref(true)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleSelect = (key: string, keyPath: string[]) => {
    sdm.tabs.homeName = key;
    console.log("hometype",sdm.tabs.homeName)
  }

    // 调试 watch
  watch(
    () => sdm.tabs.homeName,
    (newValue, oldValue) => {
      console.log(`homeName changed from "${oldValue}" to "${newValue}"`);
    }
  );

  // 在组件挂载后进行调试
onMounted(() => {
  console.log('Component mounted, current homeName:', sdm.app.homeName);
});

  </script>
  
  <style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  ::v-deep.el-aside{
    padding-left: 40px;
    overflow: auto;
    height: 580px;
  }
  </style>