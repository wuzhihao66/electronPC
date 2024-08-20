// shims-vue.d.ts

import { ComponentCustomProperties } from 'vue';
import { Store } from 'pinia';
import { DM } from './src/stores/dmStore';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    dmStore: Store<'dm', { dm: DM }>;
    dm: DM;
  }
}
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}