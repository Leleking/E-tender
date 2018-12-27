import {EMAIL_CHANGED,PASSWORD_CHANGED,RENDER_LOGIN,LOGIN_SUCCESS} from './authTypes'
import Auth from './AuthServices'
import {AsyncStorage} from 'react-native'
import {NavigationActions} from 'react-navigation'
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
            //await AsyncStorage.setItem('user_id', user._id);
            dispatch({type: LOGIN_SUCCESS, payload: user});
        dispatch(NavigationActions.navigate('RegisterScreen'))

        }
    }catch(err){
        console.log(err)
    }
}