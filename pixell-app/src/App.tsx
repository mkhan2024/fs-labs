import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Employees from "./components/employees/Employees";
import Organization from "./components/organization/Organization";
import employeeService from "./services/employeeService";
import type { Department } from "./types";

function App() {
    // ask for the list when the page loads
    const [departments, setDepartments] = useState<Department[]>(() => employeeService.getDepartments());

    const refreshEmployees = () => {
        setDepartments(employeeService.getDepartments());
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
                            onEmployeeAdded={refreshEmployees}
                        />
                    }
                />
                <Route path="organization" element={<Organization />} />
            </Route>
        </Routes>
    );
}

export default App;