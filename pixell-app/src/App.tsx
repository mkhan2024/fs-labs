import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Employees from "./components/employees/Employees";
import Organization from "./components/organization/Organization";
import departmentsJson from "./data/departments.json";
import type { Department, Employee } from "./types";

// start with the json list
const startingDepartments = departmentsJson as Department[];

function App() {
    const [departments, setDepartments] = useState(startingDepartments);

    const addEmployee = (firstName: string, lastName: string, departmentName: string) => {
        const newEmployee: Employee = { firstName: firstName };
        if (lastName !== "") {
            newEmployee.lastName = lastName;
        }

        setDepartments((oldDepartments) =>
            oldDepartments.map((department) => {
                if (department.name === departmentName) {
                    return {
                        ...department,
                        employees: [...department.employees, newEmployee]
                    };
                }
                return department;
            })
        );
    };

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/employees" />} />
                <Route
                    path="employees"
                    element={
                        <Employees
                            departments={departments}
                            onAddEmployee={addEmployee}
                        />
                    }
                />
                <Route path="organization" element={<Organization />} />
            </Route>
        </Routes>
    );
}

export default App;