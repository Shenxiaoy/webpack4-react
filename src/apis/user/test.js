function transformUrl(url, data, type) {
  if(!Array.isArray(data) && Object.keys(data).length ) {
    let newUrl = url
    let newData = Object.assign({}, data)

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
  }
}
const obj = {id: 33, name:'ddd', data: 'vv'}
console.log(transformUrl('zenu/{id}/name/data', obj, 'params'))