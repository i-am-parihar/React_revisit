import axios from 'axios';
import React from 'react';


export const RegistrationContext = React.createContext();

const intialState = {
    name: "",
    age: "",
    dob: "",
    status: "",
    address: "",
    pin_code: "",
}

const reducer =  (state, action) => {
    switch(action.type){
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "CHANGE_AGE":
            return {
                ...state,
                age: action.payload
            }
        case "CHANGE_DOB":
            return {
                ...state,
                dob: action.payload
            }
        case "CHANGE_STATUS":
            return {
                ...state,
                status: action.payload
            }
        case "CHANGE_ADDRESS":
            return {
                ...state,
                address: action.payload
            }
        case "CHANGE_PIN_CODE":
            return {
                ...state,
                pin_code: action.payload
            }
        default:
            return state;
    }
}


export function RegistrationContextProvider({children}) {
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const handelSubmit = () => {
        axios.post("http://localhost:5000/users", state).then(() => {
            alert("User Added");
        }).catch(err => {
            console.log(err);
        })
    }
    const {name, age, dob, status, address, pin_code} = state; 

    return (
        <RegistrationContext.Provider value={{
            name,
            age,
            dob,
            status,
            address,
            pin_code,
            dispatch,
            handelSubmit
        }}>
            {children}
        </RegistrationContext.Provider>
    )
}

