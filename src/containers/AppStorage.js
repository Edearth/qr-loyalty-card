import webStorage from './WebStorage'

const isMobile = false; //wip

class AppStorage {
  storage = null;

  constructor() {
    if (isMobile) {
      //TODO this.storage = mobileStorage;
    } else {
        this.storage = webStorage;
    }
  }

  readProperty(key) {
    return this.storage.readProperty(key);
  }
}

export default new AppStorage();