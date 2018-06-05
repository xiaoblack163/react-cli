import {createAction, handleActions} from 'redux-actions'
import update from 'react-addons-update'
import { message } from 'antd'
import { browserHistory } from 'react-router'
import yoyi from '../util/fetch'
import token from '../util/token'
// ------------------------------------
// Constants
// ------------------------------------

export const RECEIVE_USERNAME = 'RECEIVE_USERNAME'


// ------------------------------------
// Actions
// ------------------------------------
export const receiveUser = createAction(RECEIVE_USERNAME)

const login = payload => async (dispatch) => {
    try {
        const response = await yoyi.post(`/login`, payload)
        message.info('登录成功')
        //browserHistory.push('/')
    }catch(e){
        message.error('密码错误')
    }
}

export const actions = {
    login
}
export default handleActions({
    [RECEIVE_USERNAME]:(state, {payload}) =>{
        return update(state, {
            username: {$set: payload}
        })
    }
},{
    username: ''
})