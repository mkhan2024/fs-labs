import type { Department, Employee } from "../../types";
import "./Directory.css";

function getEmployeeName(employee: Employee) {
    if (employee.lastName) {
        return employee.firstName + " " + employee.lastName;
    }
    return employee.firstName;
}

function Directory({ departments }: { departments: Department[] }) {
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