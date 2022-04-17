import {FETCHDATA_LOADING , FETCHDATA_SUCCESS ,FETCHDATA_FAILURE,CLASSDATA} from './action' ;

const initState = {
    loading : false ,
    data : [] ,
    error: false ,
    classData : [] ,
}

export const dataReducer = (store=initState , {type , payload}) => {
    switch(type){
        case FETCHDATA_LOADING:
            return{
                ...store ,
                loading:true
            }

        case FETCHDATA_SUCCESS:
            return{
                ...store,
                loading:false,
                data:[...payload]
            }

        case FETCHDATA_FAILURE:
            return{
                ...store,
                loading:false,
                error:true ,
            }

        case CLASSDATA:
            return{
                ...store,
                classData:[...payload]
            }

        default:
            return store ;
    }
}
