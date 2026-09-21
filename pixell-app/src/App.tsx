import { useState } from "react";
import Header from "./components/header/Header";
import Directory from "./components/directory/Directory";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
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
        <>
            <Header />
            <Directory departments={departments} />
            <Form departments={departments} onAddEmployee={addEmployee} />
            <Footer />
        </>
    );
}

export default App;