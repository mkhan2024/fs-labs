import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Employees from "./components/employees/Employees";
import Organization from "./components/organization/Organization";
import employeeService from "./services/employeeService";
import roleService from "./services/roleService";
import type { Department, Role } from "./types";

function App() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    employeeService.getDepartments().then(setDepartments).catch(console.error);
    roleService.getRoles().then(setRoles).catch(console.error);
  }, []);

  const refreshEmployees = () => {
    employeeService.getDepartments().then(setDepartments).catch(console.error);
  };

  const refreshRoles = () => {
    roleService.getRoles().then(setRoles).catch(console.error);
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