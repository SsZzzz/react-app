import { observable, action } from 'mobx';

export class demoStore {
  @observable name = 'home';

  @action save(params) {
    Reflect.ownKeys(params).forEach((key) => {
      this[key] = params[key];
    });
  }
}

export default new demoStore();
