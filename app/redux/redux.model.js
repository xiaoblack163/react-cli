import {createAction, handleActions} from 'redux-actions'
import yoyi from '../util/fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const NEW_EVENT = 'NEW_EVENT'

// ------------------------------------
// Actions
// ------------------------------------
export const newEvent = createAction(NEW_EVENT, (payload) => payload)
//or
export const newEvent2 = createAction(NEW_EVENT)

const apiRequest = payload => async (dispatch) => {
    try {
        const response = await yoyi.get(url, payload)
        console.log(response, 'resolve');
        //code = 200
    } catch (e) {
        //code >= 400
        console.log(e, 'reject');
    }
}

export const actions = {
    newEvent,
}

// ------------------------------------
// reducers
// ------------------------------------

export default handleActions({
    [NEW_EVENT]: (state, {payload}) => {
        return Object.assign({}, state)
    },
    //or
    newEvent2: (state, {payload}) => {
        return Object.assign({}, state)
    }
}, {})
