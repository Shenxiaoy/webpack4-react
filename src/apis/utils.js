import axios from 'axios'

/*
* api url 转换
* */
function transformUrl (url, data, type) {
  if (data && typeof data !== 'string' && !Array.isArray(data) && Object.keys(data).length) {
	let newUrl = url
	const newData = Object.assign({}, data)

	Object.keys(data).forEach((k, i) => {
	  const reg = new RegExp(`{${k}}`, 'g')
	  newUrl = newUrl.replace(reg, data[k])

	  if (reg.test(url)) {
		newData[k] = undefined
	  }
	})

	if (type === 'params') {
	  return newData
	} else {
	  return newUrl
	}
  } else {
	if (type === 'params') {
	  return data
	} else {
	  return url
	}
  }
}

const request = axios.create({
  timeout: 5000,
  responseType: 'json',
  headers: {'content-type': 'application/json;charset=UTF-8'}
})
// request.interceptors.response.use(function (response) {
//   const data = {
// 	data: response.data
//
//   }
//   return data
//
// }, function (error) {
//   return Promise.reject(error)
// })

function requestData (method, data) {
  return JSON.stringify(data)
}

function sendRequest (url, baseUrl, method, requestConfig) {
  const transUrl = baseUrl.replace(/^\//g, '')

  return function (params) {
	// request.interceptors.request.use(function (config) {
	//   config.baseURL = transUrl + '/'
	//   config.method = method
	//   config.responseType = 'json'
	//   config.headers = {'content-type': 'application/json;charset=UTF-8'}
	//   config.transformRequest = [requestData.bind(null, method)]
	//   if (requestConfig) {
	// 	config = Object.assign(config, requestConfig)
	//   }
	//
	//   console.log(transUrl, '33333333333')
	//   return config
	//
	// }, function (error) {
	//   return Promise.reject(error)
	// })
	//
	// request.interceptors.response.use(function (response) {
	//   const data = {
	// 	data: response.data
	//
	//   }
	//   return data
	//
	// }, function (error) {
	//   return Promise.reject(error)
	// })
	const type = method === 'get' ? 'params' : 'data'
	const basic = {
	  method,
	  baseURL: transUrl,
	  url: transformUrl(url, params),
	  [type]: transformUrl(url, params, 'params')
	}
	const allConfig = Object.assign({}, basic, requestConfig ? requestConfig : {})

	request(allConfig)
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





