/*
*
* */

import axios from 'axios'

/*
* api url 转换
* */
function transformUrl(url, data, type) {
  if(data && typeof data !== 'string' && !Array.isArray(data) && Object.keys(data).length ) {
    let newUrl = url
    const newData = Object.assign({}, data)

    Object.keys(data).forEach((k, i) => {
      const reg = new RegExp(`{${k}}`, 'g')
      newUrl = newUrl.replace(reg, data[k])

      if(reg.test(url)) {
        newData[k] = undefined
      }
    })

    if(type === 'params') {
      return newData
    } else {
      return newUrl
    }
  } else {
    if(type === 'params') {
      return data
    } else {
      return url
    }
  }
}

const request = axios.create({
  timeout: 5000
})

function requestData(method, data) {
  console.log(data, method, '5555')
  return JSON.stringify(data)
}

function sendRequest(url, baseUrl, method, requestConfig) {

  const transUrl = baseUrl.replace(/\//g, '')
  request.interceptors.request.use(function(config) {
    config.baseURL = '/' + transUrl + '/'
    config.method = method
    config.responseType = 'json'
    config.headers = {'content-type': 'application/json;charset=UTF-8'}
    config.transformRequest = [requestData.bind(null, method)]

    if(requestConfig) {
      config = Object.assign(config, requestConfig)
    }

    return config
  })

  request.interceptors.response.use(function(response) {
    return response
  })

  return function(params) {
    if(method === 'get') {
      request({
        url: transformUrl(url, params),
        params: transformUrl(url, params, 'params'),
      })
    } else {
      request({
        url: transformUrl(url, params),
        data: transformUrl(url, params, 'params'),
      })
    }

  }

}

const getMethod = {
  get: (url, baseUrl, config) => sendRequest(url, baseUrl, 'get', config),
  post: (url, baseUrl, config) => sendRequest(url, baseUrl, 'post', config),
  delete: (url, baseUrl, config) => sendRequest(url, baseUrl, 'delete', config),
  put: (url, baseUrl, config) => sendRequest(url, baseUrl, 'put', config),
  patch: (url, baseUrl, config) => sendRequest(url, baseUrl, 'patch', config),
}

export default getMethod





