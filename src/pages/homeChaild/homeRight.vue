<template>
  <div>
    <!-- <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
      <el-tab-pane label="homeNode">homeNode</el-tab-pane>
      <el-tab-pane label="workNode">workNode</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs> -->
    <node v-if="($sdm.tabs.homeName =='homeNode' ) "></node>
    <workNode v-if="($sdm.tabs.homeName =='workNode' ) "></workNode>
  </div>
</template>

<script>
  import node from '../right/note.vue'
  import workNode from '../right/workNode.vue'
  export default {
  components: {
    node,
    workNode
  },
};
</script>

<style></style>