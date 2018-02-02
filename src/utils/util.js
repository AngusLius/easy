/**
 * 工具类
 */
import axios from 'axios'
import Promise from 'bluebird'
import qs from 'query-string'
import Vue from 'vue'

const vue = new Vue()

const baseURL = '/captain/'
const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    return qs.stringify(data)
  }]
})

export default class Util {
  constructor () {
    throw new Error('工具类禁止实例化！')
  }

  /**
   * 基于axios提供的ajax请求
   * @param url 请求路径
   * @param data 请求参数
   * @param method 请求方式，默认get
   * @return {Promise} Promise
   */
  static ajax (url, data = {}, method = 'GET') {
    let options = {
      url: url,
      method: method
    }
    if (method.toUpperCase() === 'POST') {
      options.data = data
    } else {
      data._ = new Date().getTime()
      options.params = data
    }
    return new Promise((resolve, reject) => {
      instance(options).then(data => {
        if (data.status === 200 && !data.data.message) {
          resolve(data.data)
        } else {
          reject(data.data.message || data.statusText)
        }
      }).catch(e => {
        // session过期或其他网络错误重新登录
        let error = e && e.response && e.response.data && e.response.data.message
        if (/Network Error/.test(e) || /Network Error/.test(error)) {
          location.href = baseURL + 'index.du'
          return
        }
        let status = e && e.response && e.response.status
        let statusText = e && e.response && e.response.statusText
        console.error(`request: ${baseURL}${options.url}; status: ${status}; statusText: ${statusText}`)
        switch (status) {
          case 400:
            vue.$Message.destroy()
            vue.$Message.error('无效的请求！')
            break
          case 404:
            vue.$Message.destroy()
            vue.$Message.error('请求路径不存在！')
            break
          case 500:
            vue.$Message.destroy()
            vue.$Message.error('服务端异常，请稍候重试！')
            break
          default:
            reject(e)
            break
        }
      })
    })
  }

  /**
   * 基于axios提供的ajax get请求
   * @param url 请求路径
   * @param data 请求参数
   * @return {Promise} Promise
   */
  static get (url, data) {
    return Util.ajax(url, data)
  }

  /**
   * 基于axios提供的ajax post请求
   * @param url 请求路径
   * @param data 请求参数
   * @return {Promise} Promise
   */
  static post (url, data) {
    return Util.ajax(url, data, 'POST')
  }

  /**
   * 浏览器打开popo聊天
   * @param mail 联系人popo邮箱
   */
  static connectWithPopo (mail) {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = 'http://popo.netease.com/static/html/open_popo.html?ssid=' + mail + '&sstp=0'
    document.body.appendChild(iframe)
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 5000)
  }
}
