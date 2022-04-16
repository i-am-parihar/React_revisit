// import axios from 'axios' ;

export const HOME_LOADING = "HOME_LOADING" ;
export const HOME_SUCCESS = "HOME_SUCCESS" ;
export const HOME_FAILURE = "HOME_FAILURE" ;

export const home_loading = () => ({
    type: HOME_LOADING
});

export const home_success = (payload) => ({
    type: HOME_SUCCESS,
    payload
});

export const home_failure = () => ({
    type: HOME_FAILURE
});



