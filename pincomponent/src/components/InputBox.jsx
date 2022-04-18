import React, { useRef } from "react";
import PropTypes from 'prop-types'
import { Pinitem } from "./Pinitem";

export const InputBox = ({length , perBox , onChange}) => {
    const [values, setValues]  = React.useState(new Array(length).fill(""))
    const elements = useRef(new Array(length).fill(0)) ;
    const handleChange = (value, index) =>{
      const val = [...values] ;
      val[index] = value ;
      setValues(val) ;
      if(value.length>0 && value.length<=perBox && index<length-1){
          elements.current[index+1].focus() ;
      }
      onChange(val.join("")) ;
    } 

    const handleBackspace = (value, index) =>{
     if(index>0){
         elements.current[index-1].focus()
     }
    }


    // React.useEffect(() => {
    //     console.log(elements) ;
    // },[]) ;

    return (
        <div>
            {values.map((item,index) =>
            <Pinitem
             key={index}
             ref={n => (elements.current[index] =n )}
             onChange={(v)=> handleChange(v,index)}
             onBackspace = {(v) => handleBackspace(v,index)}
             max={perBox}/>)}
        </div>
    )
}

InputBox.propTypes = {
    length : PropTypes.number,
    perBox : PropTypes.number
}

