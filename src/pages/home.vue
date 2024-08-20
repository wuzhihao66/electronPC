<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <homeHeader></homeHeader>
      </el-header>
      <el-container>
        <el-aside>
          <homeLeft class="homeLeft"></homeLeft>
        </el-aside>
        <el-main>
          <homeRight></homeRight>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
</script>
<script>
import { defineComponent } from 'vue';
import homeLeft from './homeChaild/homeLeft.vue';
import homeHeader from './homeChaild/homeHeader.vue';
import homeRight from './homeChaild/homeRight.vue';

export default defineComponent({
  components: {
    homeHeader,
    homeLeft,
    homeRight,
  },
});
</script>

<style lang="scss" scoped>
.home {
  height: 488px;
  width: 100%;
  .homeLeft {
    width: 300px;
  }
  .homeRight {

  }
}
::v-deep .el-header {
  height: 36px;
}
::v-deep .el-aside {
  padding-left: 40px;
  overflow: auto;
  height: 580px;
  width: 240px;
}
</style>
