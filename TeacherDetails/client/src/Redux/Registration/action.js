//action type
export const REG_LOADING = "REG_LOADING" ;
export const REG_SUCCESS = "REG_SUCCESS" ;
export const REG_FAILURE = "REG_FAILURE" ;

export const reg_loading = () => ({
    type: REG_LOADING ,
})

export const reg_success = () => ({
    type: REG_SUCCESS ,

})

export const reg_failure = () => ({
    type: REG_FAILURE ,
})

export const register =  (userDetails) => (dispatch) => {
    dispatch(reg_loading) ;
    fetch('http://localhost:8080/register',{
        method:"POST" ,
        body:JSON.stringify(userDetails) ,
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res)=> res.json())
    .then((res)=> dispatch(reg_success()))
    .catch((err)=> dispatch(reg_failure())) ;
}