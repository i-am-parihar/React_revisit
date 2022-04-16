import {GET_PRODUCTS_LOADING , GET_PRODUCTS , GET_PRODUCTS_ERROR} from "./action" ;

const iniState = {
    loading : false ,
    products : [] ,
    error : false ,
}

export const productReducer = (store = iniState , {type , payload}) => {
    switch(type){
        case GET_PRODUCTS_LOADING:
            return{
                ...store ,
                loading:true ,
            }

        case GET_PRODUCTS:
            return{
                ...store,
                products: [...payload],
            }

        case GET_PRODUCTS_ERROR:
            return{
                ...store ,
                error:true,
            }

        default:
            return store ;
    }
}
