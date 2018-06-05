import {createAction, handleActions} from 'redux-actions'
import yoyi from '../util/fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const TEST = 'TEST'
export const RESET_REDUX = 'RESET_REDUX'
// ------------------------------------
// Actions
// ------------------------------------

const resetRedux = createAction(RESET_REDUX) 
const testAction = createAction(TEST)

const fetchSmoneGet = payload => async (dispatch) => {
    try {
        const response = await yoyi.get('/customer/listIncludeStatistics', payload)
        console.log(response, 'resolve');
        //code = 200
    } catch (e) {
        //code >= 400
        console.log(e, 'reject');
    }
}

const fetchSmonePost = payload => async (dispatch) => {
    try {
        const response = await yoyi.post('/amount/add', payload)
        console.log(response, 'resolve');
    } catch (e) {
        console.log(e, 'reject');
    }
}


export const actions = {
    testAction,
    resetRedux,
    fetchSmoneGet,
    fetchSmonePost
}

// ------------------------------------
// reducers
// ------------------------------------

export default handleActions({
    [testAction]: (state, {payload}) => {
        return Object.assign({}, state, {
            test: payload
        })
    }
}, {
    test: 'test'
})
