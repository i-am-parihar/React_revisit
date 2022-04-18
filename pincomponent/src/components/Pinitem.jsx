import React from "react";

const style = {
    padding :10 ,
    width:15,
    fontSize:14,
    margin:5
};

export const Pinitem =  React.forwardRef(({onChange, onBackspace , max} , ref) => {
   
    const handlekeyUp = (e) => {
     switch(e.keyCode){
         case 8:{
            if(!e.target.value) onBackspace(e.target.value) ;
            break ;
         }
         case 9:{
             e.preventDefault() ;
             break;
         }
         default: {
            onChange(e.target.value) ;
         }
     }
    };


    return(
        <input onKeyUp={handlekeyUp} ref={ref} maxLength={max} style={style}/>
    )
})