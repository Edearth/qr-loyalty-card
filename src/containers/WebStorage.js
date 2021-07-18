import Cookies from 'universal-cookie';

class WebStorage {
  cookies = new Cookies();
  cookie_name = "qr-loyalty-card";
  storage = this.#readCookie();

  #readCookie() {
    var cookie = this.cookies.get(this.cookie_name);
    if (cookie == null) {
      cookie = {};
    }
    return cookie;
  }

  #updateCookie(newObject) {
    this.cookies.set(this.cookie_name, newObject, { path: '/', secure: true });
  }

  readProperty(key) {
    return this.storage[key];
  }

  writeProperty(key, value) {
    this.storage[key] = value;
    this.#updateCookie(this.storage);
  }
}

export default new WebStorage();