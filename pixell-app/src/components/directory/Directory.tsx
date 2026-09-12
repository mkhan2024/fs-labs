import departmentsJson from "../../data/departments.json";
import type { Department, Employee } from "../../types";
import "./Directory.css";

const departments = departmentsJson as Department[];

function getEmployeeName(employee: Employee) {
    if (employee.lastName) {
        return employee.firstName + " " + employee.lastName;
    }
    return employee.firstName;
}

function Directory() {
    return (
        <main>
            {departments.map((department) => (
                <section className="department" key={department.name}>
                    <h2>{department.name}</h2>
                    <ul>
                        {department.employees.map((employee) => (
                            <li key={employee.firstName + (employee.lastName ?? "")}>
                                {getEmployeeName(employee)}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
}

export default Directory;