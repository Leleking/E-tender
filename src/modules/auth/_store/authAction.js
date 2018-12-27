import {EMAIL_CHANGED,PASSWORD_CHANGED,RENDER_LOGIN,LOGIN_SUCCESS,LOGIN_FAIL, FB_LOGIN_SUCCESS,FB_LOGIN_FAIL} from './authTypes'
import Auth from './AuthServices'
import {AsyncStorage} from 'react-native'
import {NavigationActions} from 'react-navigation'
import { Facebook } from 'expo'
export const emailChanged = payload => {
    return{
        type:EMAIL_CHANGED,
        payload
    }
}
export const passwordChanged = payload =>{
    return{
        type:PASSWORD_CHANGED,
        payload
    }
}
export const renderLogin = credentials => async dispatch =>{
    try{
        dispatch({type:RENDER_LOGIN})
        const user = await Auth.authenticate(credentials)
        if (user) {
           await AsyncStorage.setItem('access_token', JSON.stringify(user.data.access_token));
            dispatch({type: LOGIN_SUCCESS, payload: user});
            dispatch(NavigationActions.navigate('RegisterScreen'))
        }
    }catch(err){
        dispatch({type:LOGIN_FAIL})
        console.log(err)
    }
}
export const facebookLogin = () => async dispatch =>{
    let token  = await AsyncStorage.getItem('fb_token')
    if(token){
        dispatch({type:FB_LOGIN_SUCCESS,payload:token})
    } else {
        renderFacebookLogin(dispatch)
    }

}
const renderFacebookLogin = async (dispatch) => {
    let {type,token} = await Facebook.logInWithReadPermissionsAsync('174890166470465',{
        permissions:['public_profile']
    });
    if (type ==='cancel'){
        return dispatch({type:FB_LOGIN_FAIL})
    }
    await AsyncStorage.setItem('fb_token', token)
    dispatch({type:FB_LOGIN_SUCCESS,payload:token})
}