import { combineReducers } from 'redux'
import authReducer from './Store/reducer/auth'
import reducer from './Store/reducer/Burgerbuilder'

const rootreducer = combineReducers({
    BurgerBuilder: reducer,
    auth: authReducer
})

export default rootreducer