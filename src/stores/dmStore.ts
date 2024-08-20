import { defineStore } from 'pinia';

export interface SubObject {
  property1: string;
  property2: number;
}

export interface App {
    hometype: string;
    homeName: string;
  }
export interface Home {
    homeIndex: number;
    homeName: string;
  }
  export interface tabs {
    homeName: string;
  }

export interface DM {
  subObject1: SubObject;
  app: App;
  home: Home;
  tabs: tabs;
  // 其他子对象...
}

const defaultDM: DM = {
  subObject1: { property1: 'default1', property2: 0 },
  app: { hometype: 'home', homeName: '2' },
  home: { homeIndex: 1, homeName: '1' },
  tabs: { homeName: 'workNode'},
  // 其他子对象默认值...
};

export const useDMStore = defineStore('dm', {
  state: () => ({
    dm: { ...defaultDM } as DM,
  }),
  actions: {
    updateDM(newDM: Partial<DM>) {
      this.dm = { ...this.dm, ...newDM };
    },
    updateSubObject(key: keyof DM, newSubObject: Partial<SubObject>) {
      (this.dm[key] as SubObject) = { ...(this.dm[key] as SubObject), ...newSubObject };
    },
  },
});

// 现在将 DM 接口正确导出
// export type { DM };

