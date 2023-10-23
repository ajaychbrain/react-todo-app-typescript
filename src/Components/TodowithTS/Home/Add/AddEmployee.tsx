import { useState } from "react";
import "./index.css";
import { IEmployee } from "../../Employee.type";

type Props = {
    onBackClick: ()=> void;
    OnaddMyEmployee: (data: IEmployee)=> void;
};

const AddEmployee = (props: Props)=>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const {onBackClick,OnaddMyEmployee } = props;

  

   const OnaddBtnEmployee= (e:any)=>{
    e.preventDefault()
    const data :IEmployee = {
        id: new Date().toJSON.toString(),
        firstName: firstName,
        lastName: lastName,
        email: email
    }
    
    console.log(data)
    OnaddMyEmployee(data);
   }

   const onFirstNameChange = (e:any) =>{
    setFirstName(e.target.value);
   }

   const onLastNameChange = (e:any) =>{
    setLastName(e.target.value);
   }

   const onEmailChange = (e:any) =>{
    setEmail(e.target.value);
   }
   
    return (
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
                <input type="button" onClick={OnaddBtnEmployee} value="Submit" />
            </div>
        </form>
        
       
        </div>
    )
}

export default AddEmployee;