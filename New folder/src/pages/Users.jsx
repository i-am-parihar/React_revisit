import {useState, useEffect} from 'react';
import axios from "axios";
import '../App.css';

export const Users = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then(res => {
      setData(res.data);
    });
  },[])
//   console.log(data);
    return (
        <div>
        <table className='table'>
            <tbody>
            {
                data.map((el,id) => {
                    return(
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.age}</td>
                            <td>{el.dob}</td>
                            <td>{el.status}</td>
                            <td>{el.address}</td>
                            <td>{el.pin_code}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    )
}