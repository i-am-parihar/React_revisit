import { LOGIN_LOADING, LOGIN_SUCCESS,LOGIN_FAILURE } from "./action";      //import all actions

const initState = {                                                           //initState for store
    loading : false ,
    isAuthenticated : false ,
    token : "" ,
    error: false ,
};

const loginReducer = (store = initState , {type , payload}) => {            //performing action in store
    switch(type){
        case LOGIN_LOADING:
            return{
                ...store,
                loading: true ,
            };
        
        case LOGIN_SUCCESS:
            return{
                ...store,
                loading:false,
                isAuthenticated:true,
                token:payload ,
            };
        
        case LOGIN_FAILURE:
            return{
                ...store,
                loading:false,
                error:true,
            }

        default:
            return store ;
    }
}

export { loginReducer } ;