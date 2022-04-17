import {useSelector , useDispatch } from "react-redux" ;


export const ClassDetails = (prop) => {
    const {classData} = useSelector((state) => state.teacherData)  ;
    // console.log(classData) ;
    return(
        <div>
            <h2>Class Details</h2>
            <table>
                <tr>
                    <th>Grade</th>
                    <th>Section</th>
                    <th>Subject</th>
                </tr>
                {
                    classData.map((e,id)=>{
                        return(
                            <tr>
                                <td>{e.grade}</td>
                                <td>{e.section}</td>
                                <td>{e.subject}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}