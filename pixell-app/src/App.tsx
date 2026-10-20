import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Employees from "./components/employees/Employees";
import Organization from "./components/organization/Organization";
import employeeService from "./services/employeeService";
import roleService from "./services/roleService";
import type { Department, Role } from "./types";

function App() {
    // both lists come from a request when the page loads
    const [departments, setDepartments] = useState<Department[]>(() => employeeService.getDepartments());
    const [roles, setRoles] = useState<Role[]>(() => roleService.getRoles());

    const refreshEmployees = () => {
        setDepartments(employeeService.getDepartments());
    };

    const refreshRoles = () => {
        setRoles(roleService.getRoles());
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
                <Route
                    path="organization"
                    element={
                        <Organization
                            roles={roles}
                            onRoleAdded={refreshRoles}
                        />
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;