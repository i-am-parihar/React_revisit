// action type 
export const SIGNUP_LOADING = "SIGNUP_LOADING" ;
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS" ;
export const SIGNUP_FAILURE = "SIGNUP_FAILURE" ;
export const SET_DEFAULT  = "SET_DEFAULT" ;

// action creater
export const signup_loading =  () => ({
    type: SIGNUP_LOADING
});

export const signup_success = () => ({
    type: SIGNUP_SUCCESS,
});

export const signup_failure = () => ({
    type: SIGNUP_FAILURE 
});

export const setDefault = () => ({
    type: SET_DEFAULT 
});

export const signUp = (userDetails) => (dispatch) => {
    dispatch(signup_loading()) ;
    fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
        method:"POST" ,
        body: JSON.stringify(userDetails),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res) => res.json()) 
    .then((res) => dispatch(signup_success())) 
    .catch((err) => dispatch(signup_failure())) ;
};