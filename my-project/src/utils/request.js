

//mpvuePlatform 全局变量 判断小程序类型
function createFly() {
  if (mpvuePlatform === "wx") {
    const Fly = require("flyio/dist/npm/wx");
    return new Fly();
  }
  return null;
}

export function get(url, params = {}) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then(value => {
          console.log(value);
          resolve(value);
        })
        .catch(err => {
          handleError(err);
          reject(err);
        });
    });
  }
}

export function post(url, params = {}) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(err => {
          handleError(err);
          reject(err);
        });
    });
  }
}

function handleError(err) {
  console.log(err);
}
