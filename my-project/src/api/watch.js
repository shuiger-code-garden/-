
import {getOpenId} from './index'

export function getSetting(auth, onSuccess, onFail) {
  mpvue.getSetting({
    success(res) {
      console.log(res)
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess && onSuccess(res)
      } else {
        onFail && onFail(res)
      }
    },
    fail(res) {
      console.log(res)
    }
  })
}

export function getUserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success: function(res) {
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log(res)
    }
  })
}

export function setStorageSync(key, data) {
  try {
    mpvue.setStorageSync(key, data)
  } catch (e) {
    console.log(e)
  }
}

export function getStorageSync(key) {
  try {
    return mpvue.getStorageSync(key)
  } catch (e) {
    console.log(e)
  }
}

export function getUserOpenId(onSuccess) {
  mpvue.login({
    success (res) {
      if (res.code) {
        const {code} = res
        getOpenId(code).then(response => {
          console.log(response, 'openid')
          // eslint-disable-next-line standard/object-curly-even-spacing
          const { data: {openid} } = response
          setStorageSync('openId', openid)
          onSuccess(openid)
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}

export function showLoading(title = '加载中') {
  mpvue.showLoading({
    title
  })
}

export function hideLoading() {
  mpvue.hideLoading()
}
