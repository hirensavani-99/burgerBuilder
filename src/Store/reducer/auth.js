import * as actionTypes from '../action/actionTypes'
import { updateObject } from '../utility'

const initialState = {

    token: null,
    userId: null,
    error: null,
    loading: false
}


const authStart = (state, action) => {
    return updateObject(...state, { error: null, loading: true })
}

const authSuccess = (state, action) => {
    return updateObject(...state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(...state, {
        error: action.error
    })
}
const authreducer = (state = initialState, action) => {

    switch (actionTypes) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        default: return state
    }

}

export default authreducer