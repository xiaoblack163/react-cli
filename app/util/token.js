
import Cookie from 'js-cookie'

const token = {
    /**
     * defaultKey
     */
    key: 'TOKEN',
    /**
     * [set description]
     * @param {string} v token value
     */
    set(v) {
        if(!v) return
        Cookie.set(token.key, v);
    },
    /**
     * get token
     */
    get() {
        const result = Cookie.get(token.key)
        return result ? result : null;
    },
    /**
     * clear token with logout
     */
    clear() {
        return Cookies.remove(token.key);
    }
}

export default {
    set: token.set,
    get: token.get,
    clear: token.clear,
}
