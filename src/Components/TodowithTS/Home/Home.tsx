import React, { useState } from "react";
import "./index.css";
import { IEmployee, PageEnum, dummyData } from "../Employee.type";
import EmployeeList from "../List/EmployeeList";
import AddEmployee from "./Add/AddEmployee";
import EditEmployee from "../Edit/EditEmployee";


const Home = () => {
    const [employeeList, setEmployeeList] = useState(dummyData as IEmployee[]);
    const [showPage, setShowPage] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState( {} as | IEmployee)
    const onAddEmployee = () => {
        setShowPage(PageEnum.add);
    }

    const showListPage = () => {
        setShowPage(PageEnum.list)
    }

    const addEmployeeHandler = (data: IEmployee)=>{
        setEmployeeList([...employeeList, data]);
    }   

    const deleteEmployee = (data: IEmployee)=>{
            const indexToDelete = employeeList.indexOf(data);
            const tempList = [...employeeList]
            tempList.splice(indexToDelete, 1);
            setEmployeeList(tempList);
    }

    const editEmployeeData = (data: IEmployee)=>{
        setShowPage(PageEnum.edit);
        setDataToEdit(data);
    }

    const updateData = (data: IEmployee)=>{
        const filterData = employeeList.filter(x => x.id === data.id)[0];
        const indexOfRecord = employeeList.indexOf(filterData)
        const tempData = [...employeeList];
        tempData[indexOfRecord] = data;
        setEmployeeList(tempData)
    }

    return (
        <>
            <article className="article-header"><br></br>
                
                <header>
                    <h1>React Crud Application using TypeScipt </h1>
                </header>
            </article>
            <h3 style={{textAlign:'center'}}>Employee List</h3>

            <section className="section-content">
                {showPage === PageEnum.list && (
                    <>
                        <input type="button" value="Add Employee" className="add-employee-btn" onClick={onAddEmployee} />
                        <EmployeeList list={employeeList} onDeleteEmployee= {deleteEmployee} onEdit={editEmployeeData} />
                    </>

                )}

                {showPage === PageEnum.add && <AddEmployee onBackClick={showListPage} OnaddMyEmployee={addEmployeeHandler} />}
                {showPage === PageEnum.edit && <EditEmployee data= {dataToEdit} onBackClick={showListPage} onUpdateClickhand={updateData}/>}
            </section>

        </>
    )
};

export default Home;