import React from "react";
import { Navigate } from "react-router-dom";
import { RegistrationContext } from "../context/registrationContext";

export const RegTwo = () => {
    const{name,age,bod,dispatch,status,address,pin_code,handelSubmit} = React.useContext(RegistrationContext);

    // if(!name || !age || !bod){
    //     return <Navigate to="/registration/one" />
    // }

    return (
        <div>

         <label>Status</label> 
         <input
         placeholder="Status"
         type="text"
         value={status}
        onChange={(e) => dispatch({type: "CHANGE_STATUS", payload: e.target.value})}
         />
         <br/>  

         <label>Address</label>
            <input
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => dispatch({type: "CHANGE_ADDRESS", payload: e.target.value})}
            />
            <br/>

            <label>Pin Code</label>
            <input
            placeholder="Pin Code"
            type="text"
            value={pin_code}
            onChange={(e) => dispatch({type: "CHANGE_PIN_CODE", payload: e.target.value})}
            />
            <br/>

            <button
            disabled={!status || !address || !pin_code}
            onClick={handelSubmit}
            >Submit</button>

        </div>
    )
}