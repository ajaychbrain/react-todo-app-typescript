import React from "react"
import "./index.css";
import { IEmployee } from "../Employee.type";

type Props = {
    onClosee: () => void;
    data: IEmployee
}



const EmployeeDetail = (props: Props)=>{
   
    const { onClosee, data } = props; 
    return (
        <>

<div id="myModal" className="modal">

  <div className="modal-content" style={{textAlign: 'center'}}>
    {/* <span className="close">&times;</span> */}
    <button className="close" onClick={onClosee}>&times;</button>
    <h3>Employee Data</h3>
    <div>
        <div>
            <label>First Name: {data.firstName}</label>
        </div>
        <div>
            <label>Last Name: {data.lastName}</label>
        </div>
        <div>
            <label>Email: {data.email}</label>
        </div>
    </div>
  </div>

</div>

        
        </>
    )
    }

export default EmployeeDetail