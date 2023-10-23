import React from 'react';
import "./index.css";
import { IEmployee } from '../Employee.type';

type Props = {
    list: IEmployee[];
    onDeleteEmployee: (data: IEmployee) => void
}


const EmployeeList = (props: Props) => {
    const { list, onDeleteEmployee } = props; 
  return (
    <div>
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  
    {
        list.map(employee => {
            return <tr key={employee.id}>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.email}</td>
                <td>
                    <div>
                        <input type='button' value="view" />
                        <input type='button' value="edit" />
                        <input type='button' value="delete" onClick={()=>onDeleteEmployee(employee)} />
                    </div>
                </td>
            </tr>
        })
    }
 
</table>
    </div>
  )
}

export default EmployeeList
