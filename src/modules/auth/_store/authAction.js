import {EMAIL_CHANGED,PASSWORD_CHANGED,RENDER_LOGIN,LOGIN_SUCCESS,LOGIN_FAIL, FB_LOGIN_SUCCESS,FB_LOGIN_FAIL,LOADING_OFF} from './authTypes'
import Auth from './AuthServices'
import {AsyncStorage} from 'react-native'
import {NavigationActions} from 'react-navigation'
import { Facebook } from 'expo'
import {Toast} from 'native-base'
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
export const loadingOff = () =>{
    return {
        type:LOADING_OFF
    }
}
export const renderLogin = credentials => async dispatch =>{
    try{
        
        dispatch({type:RENDER_LOGIN})
        const user = await Auth.authenticate(credentials)
        if (user) {
           await AsyncStorage.setItem('access_token', JSON.stringify(user.data.access_token));
           await AsyncStorage.setItem('user',JSON.stringify(user.data));
            dispatch({type: LOGIN_SUCCESS, payload: user});
            dispatch(NavigationActions.navigate('RegisterScreen'))
        }
    
    }catch(err){
        dispatch({type:LOGIN_FAIL})
        Toast.show({
            text: `${err.response.data.message}`,
            buttonText: 'Okay',
            duration: 5000,
            type:'danger',
            buttonTextStyle: { color: "#008000" },
            buttonStyle: { backgroundColor: "#2c3e50" }
          }) 
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