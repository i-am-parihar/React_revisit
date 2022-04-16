import React from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../context/registrationContext";

export const RegOne = () => {
   const {name,age,bod,dispatch} = React.useContext(RegistrationContext);
   const navigate = useNavigate();
   

    return (
        <div>
            <label>Name</label>
            <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => dispatch({type: "CHANGE_NAME", payload: e.target.value})}
            />
            
            <br/>
            
            <label>Age</label>
            <input
            placeholder="age"
            type="text"
            value={age}
            onChange={(e) => dispatch({type: "CHANGE_AGE", payload: e.target.value})}
            />

            <br/>
            
            <label>Date of Birth</label>

            <input
            placeholder="dob"
            type="date"
            value={bod}
            onChange={(e) => dispatch({type: "CHANGE_DOB", payload: e.target.value})}
            />
            
            <br/>

            <button
            disabled={!name && !age && !bod}
            onClick={() => navigate("/registration/two")}>Next</button>

        </div>
    )
}