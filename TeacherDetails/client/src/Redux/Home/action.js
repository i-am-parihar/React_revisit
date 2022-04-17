export const FETCHDATA_LOADING = "FETCHDATA_LOADING" ;
export const FETCHDATA_SUCCESS = "FETCHDATA_SUCCESS" ;
export const FETCHDATA_FAILURE = "FETCHDATA_FAILURE" ;
export const CLASSDATA = "CLASSDATA" ;

export const fetchdata_loading = () => ({
    type: FETCHDATA_LOADING ,
})

export const fetchdata_success = (payload) => ({
    type:  FETCHDATA_SUCCESS ,
    payload ,
})

export const fetchdata_failure = () => ({
    type: FETCHDATA_FAILURE ,
})

export const classData = (payload) => ({
    type: CLASSDATA ,
    payload,
})


export const fetchdata = () => (dispatch) =>{
    dispatch(fetchdata_loading()) ;
    fetch('http://localhost:8080/data')
    .then((res) => res.json())
    .then((res) =>dispatch(fetchdata_success(res)))
    .catch(() =>  dispatch(fetchdata_failure())) ;
}



