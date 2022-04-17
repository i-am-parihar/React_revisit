import { REG_FAILURE ,REG_LOADING , REG_SUCCESS } from "./action";

const initState = {
    loading :false ,
    isRegister : false ,
    error : false ,
}

export const regReducer = (store= initState , {type}) => {
    switch(type){
        case REG_LOADING:
            return{
                ...store,
                loading:true,
            };

        case REG_SUCCESS:
            return{
                ...store,
                loading:false,
                isRegister:true,
            }

        case REG_FAILURE:
            return{
                ...store,
                loading:false ,
                error:true ,
            }

        default:
            return store ;
    }
}