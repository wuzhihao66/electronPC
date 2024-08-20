import './assets/main.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import elementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import globalVariablePlugin from './stores/globalVariablePlugin';

const app = createApp(App);

console.log("应用加载中");
app.use(createPinia());
app.use(elementPlus);
app.use(globalVariablePlugin);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

console.log("应用加载中2");

if (window && (window as any).require) {
  const electron = (window as any).require('electron');
  if (electron && electron.ipcRenderer) {
    app.config.globalProperties.$electron = electron;
  } else {
    console.error('ipcRenderer not available in Electron.');
  }
} else {
  console.error('Electron not found.');
}

app.mount('#app');
