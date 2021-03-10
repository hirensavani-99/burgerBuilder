import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token,userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth =(email,password,isSignUp)=>{
    return dispatch=>{
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJjHW8OW1gy-l5gXov2tn19PPF3-qCrvc'
        if(!isSignUp){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJjHW8OW1gy-l5gXov2tn19PPF3-qCrvc'
        }
        axios.post(url,authData)
        .then(res=>{
         
            dispatch(authSuccess(res.data.idToken,res.data.localId))
        })
        .catch(err=>{
           
            dispatch(authFail(err))
        })
    }
}