import { IEmployee } from "../Employee.type";
import React, {useState} from "react";
type Props = {
    data: IEmployee;
    onBackClick: ()=> void;
    onUpdateClickhand: (data:IEmployee) => void
}

const EditEmployee = (props: Props)=>{
    const {data, onBackClick, onUpdateClickhand} = props;

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);


    const onFirstNameChange = (e:any) =>{
        setFirstName(e.target.value);
       }
    
       const onLastNameChange = (e:any) =>{
        setLastName(e.target.value);
       }
    
       const onEmailChange = (e:any) =>{
        setEmail(e.target.value);
       }

       

   const OnaddBtnEmployee= (e:any)=>{
    e.preventDefault();
    const updateData :IEmployee = {
        id: data.id,
        firstName: firstName,
        lastName: lastName,
        email: email
    }
    
    console.log(data)
    onUpdateClickhand(updateData);
    onBackClick()
   }



    return (
        <>
        <div className="form-container">
        <div>
            <h3>Add Employee  </h3>
            </div>
        <form>
            <div>
                <label>First Name :</label>
                <input type="text" value={firstName} onChange={onFirstNameChange}/>
            </div>
            <div>
                <label>Last Name :</label>
                <input type="text" value={lastName} onChange={onLastNameChange}/>
            </div>
            <div>
                <label>Email Add :</label>
                <input type="text" value={email} onChange={onEmailChange}/>
            </div>
            <div>
                <input type="button"  value="Back" onClick={onBackClick}/>
                <input type="button" onClick={OnaddBtnEmployee} value="Update Employee" />
            </div>
        </form>
    
        </div>  

        
        </>
    )
}

export default EditEmployee;