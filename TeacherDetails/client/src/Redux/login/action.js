// action type 
export const LOGIN_LOADING = "LOGIN_LOADING" ;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" ;
export const LOGIN_FAILURE = "LOGIN_FAILURE" ;

// action creater
export const login_loading =  () => ({
    type: LOGIN_LOADING
});

export const login_success = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const login_failure = () => ({
    type: LOGIN_FAILURE 
});


export const login = (userDetails) => (dispatch) => {
    dispatch(login_loading()) ;
    fetch('http://localhost:8080/login',{
        method:"POST" ,
        body: JSON.stringify(userDetails),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((res) => dispatch(login_success(res.token))) 
    .catch((err) => dispatch(login_failure())) ;
}