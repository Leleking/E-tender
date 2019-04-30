const INITIAL_STATE ={
    email:'',
    password:'',
    user:null,
    error:'',
    loading:false,
    isAuthenticated:false,
    error:''

}
export default (state=INITIAL_STATE,{payload,type}) => {
    return state
}