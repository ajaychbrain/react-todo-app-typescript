import React, {useState} from 'react';
import "./index.css";
import { IEmployee } from '../Employee.type';
import EmployeeDetail from '../View/EmployeeDetail';

type Props = {
    list: IEmployee[];  
    onDeleteEmployee: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
}


const EmployeeList = (props: Props) => {    
    const { list, onDeleteEmployee, onEdit} = props; 

    const [showmodel, setShowModel] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

    const viewEmployee = (data: IEmployee)=>{
        setDataToShow(data);
        setShowModel(true);
    }
    const onCloseEmployee = ()=>{
        setShowModel(false);
    }


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
                        <input type='button' value="view" onClick={()=>viewEmployee(employee)} />
                        <input type='button' value="edit" onClick={()=> onEdit(employee)} />
                        <input type='button' value="delete" onClick={()=>onDeleteEmployee(employee)} />
                    </div>
                </td>
            </tr>
        })
    }
{showmodel && dataToShow !== null
 &&<EmployeeDetail onClosee={onCloseEmployee} data={dataToShow}/>}
</table>

    </div>
  )
}

export default EmployeeList
