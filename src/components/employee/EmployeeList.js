import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./Employee";
import "./Employee.css";
import { useHistory } from 'react-router-dom';

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();

  }, []);

  const history = useHistory()

  return (
    <div className="employees">
    <h2>Employees</h2>
      <button onClick={() => {history.push("/employees/create")}}>
            New Employee
      </button>
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
  );
};