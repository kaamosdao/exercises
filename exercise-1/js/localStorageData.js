class LocalStorageData {
  constructor(key) {
    this.key = key;
  }

  setData(email, password) {
    const data = JSON.stringify({
      email, password,
    });
    localStorage.setItem(this.key, data);
  }

  getData() {
    const data = localStorage.getItem(this.key);
    return JSON.parse(data);
  }

  hasData() {
    const data = localStorage.getItem(this.key);
    return !!data;
  }
}

export default LocalStorageData;
