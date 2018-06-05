import { combineReducers } from 'redux'

//import module
import testModul from './testModul'
import authed from './authed'

//module to redux
const appReducer = combineReducers({
    testModul,
    authed
})



//reset redux
//重置redux，在切换公司或者切换用户的时候需要触发，从而清楚全部缓存数据
const rootReducer = (state, action) => {
    if (action.type === 'RESET_REDUX') {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer
