import type { App } from 'vue';
import { reactive } from 'vue';
import { useDMStore } from '../stores/dmStore';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sdm: any;
  }
}

const globalVariablePlugin = {
  install(app: App) {
    app.config.globalProperties.$sdm = reactive(useDMStore().dm);
  }
};

export default globalVariablePlugin;
