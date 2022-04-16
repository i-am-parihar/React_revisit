import { SIGNUP_LOADING, SIGNUP_SUCCESS,SIGNUP_FAILURE,SET_DEFAULT } from "./action";      //import all actions

const initState = {                                                           //initState for store
    loading : false ,
    isRegister : false ,
    error: false ,
};

const signupReducer = (store = initState , {type}) => {            //performing action in store
    switch(type){
        case SIGNUP_LOADING:
            return{
                ...store,
                loading: true ,
            };
        
        case SIGNUP_SUCCESS:
            return{
                ...store,
                loading:false,
                isRegister:true,
            };
        
        case SIGNUP_FAILURE:
            return{
                ...store,
                loading:false,
                error:true,
            }

        case SET_DEFAULT:
            return{
                loading: false,
                isRegister:false,
                error:false,
            }

        default:
            return store ;
    }
}

export { signupReducer } ;