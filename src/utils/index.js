

export default {
  getCookie,
  setCookie,
  delCookie
}

function getCookie(key) {
  const strCookie = document.cookie

  if (strCookie.indexOf(key) > -1) {
    const arrCookie = strCookie.split("; ")
    for (let i = 0; i < arrCookie.length; i++) {
      const arr = arrCookie[i].split("=")

      if (arr[0] === key) {
        return arr[1]
      }
    }
  } else {
    return null
  }
}

function setCookie(name, value, day) {
  if(day) {
    const expires = day * 24 * 60 * 60 * 1000
    const date = new Date(+new Date() + expires)
    document.cookie = name + '=' + encodeURI(value) + ';expires=' + date.toUTCString()
  } else {
    document.cookie = name + '=' + encodeURI(value)
  }
}

function delCookie(name) {
  setCookie(name, ' ', -1)
}