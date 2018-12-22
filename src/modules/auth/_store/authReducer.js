const INITIAL_STATE ={email:'',password:'',user:null,error:'',loading:false}
export default (state=INITIAL_STATE,{payload,type}) => {
    switch(type){
        case 'working':
            return 0
        default:
            return state
    }
}