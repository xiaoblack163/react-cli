
import token from '../util/token'
import { root } from '../util/path'

/**
 * 使用方法
 * import yoyi from 'fetch'
 *
 * yoyi.get(url, {key,value})
 * yoyi.post(url, {key,value})
 *
 * code 200   = resolve
 * code >= 400   = reject
 */

const headers = {
    "Accept": "application/json;charset=utf-8",
    "Content-Type": "application/json;charset=utf-8",
    "token": null
}

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}

const json = response => response.json()

const formatGet = (url, payload) => {
    const result = Object.keys(payload).map(key => {
        return (`${key}=${payload[key]}`)
    }).join('&')
    return `${url}?${result}`
}

const isObject = v => {
    if(Object.prototype.toString.call(v) == '[object Object]')
        return true
    return false
}

const post = (url, payload) => {
    Object.assign(headers, { token: token.get()})
    const requestHeaders = {
        headers,
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(payload)
    }
    return fetch(`${root}${url}`, requestHeaders).then(status).then(json)
}

const get = (url, payload) => {
    url = isObject(payload) ? formatGet(url, payload) : url
    Object.assign(headers, { token: token.get()})
    const requestHeaders = {
        headers,
        method: 'GET',
        credentials: 'include',
    }
    console.log(`${root}${url}`)
    return fetch(`${root}${url}`, requestHeaders).then(status).then(json)
}

export default {
    post: post,
    get: get
}
