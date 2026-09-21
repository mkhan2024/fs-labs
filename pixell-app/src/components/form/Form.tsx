import { useState } from "react";
import type { FormEvent } from "react";
import type { Department } from "../../types";
import "./Form.css";

function Form({
    departments,
    onAddEmployee
}: {
    departments: Department[];
    onAddEmployee: (firstName: string, lastName: string, departmentName: string) => void;
}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [departmentName, setDepartmentName] = useState(departments[0].name);
    const [error, setError] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        // wipe old error first
        setError("");

        if (firstName.trim().length < 3) {
            setError("First name must be at least 3 characters.");
            return;
        }

        onAddEmployee(firstName.trim(), lastName.trim(), departmentName);

        setFirstName("");
        setLastName("");
        setDepartmentName(departments[0].name);
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>Add Employee</h2>

            <label>
                First Name
                <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </label>

            <label>
                Last Name
                <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </label>

            <label>
                Department
                <select
                    value={departmentName}
                    onChange={(event) => setDepartmentName(event.target.value)}
                >
                    {departments.map((department) => (
                        <option key={department.name} value={department.name}>
                            {department.name}
                        </option>
                    ))}
                </select>
            </label>

            {error !== "" && <p className="error">{error}</p>}

            <button type="submit">Add Employee</button>
        </form>
    );
}

export default Form;