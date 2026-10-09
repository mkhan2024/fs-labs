import type { FormEvent } from "react";
import type { Department } from "../../types";
import useFormInput from "../../hooks/useFormInput";
import employeeService from "../../services/employeeService";
import "./Form.css";

function Form({
    departments,
    onEmployeeAdded
}: {
    departments: Department[];
    onEmployeeAdded: () => void;
}) {
    const firstNameInput = useFormInput("");
    const lastNameInput = useFormInput("");
    const departmentInput = useFormInput("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const result = employeeService.tryCreateEmployee(
            firstNameInput.value,
            lastNameInput.value,
            departmentInput.value
        );

        const firstNameOk = firstNameInput.validate(() => result.firstNameMessages);
        const departmentOk = departmentInput.validate(() => result.departmentMessages);
        lastNameInput.validate(() => []);

        if (firstNameOk && departmentOk && result.ok) {
            onEmployeeAdded();
            firstNameInput.reset();
            lastNameInput.reset();
            departmentInput.reset();
        }
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>Add Employee</h2>

            <label>
                First Name
                <input
                    type="text"
                    value={firstNameInput.value}
                    onChange={(event) => firstNameInput.setValue(event.target.value)}
                />
            </label>
            {firstNameInput.messages.map((message) => (
                <p className="error" key={message}>{message}</p>
            ))}

            <label>
                Last Name
                <input
                    type="text"
                    value={lastNameInput.value}
                    onChange={(event) => lastNameInput.setValue(event.target.value)}
                />
            </label>
            {lastNameInput.messages.map((message) => (
                <p className="error" key={message}>{message}</p>
            ))}

            <label>
                Department
                <select
                    value={departmentInput.value}
                    onChange={(event) => departmentInput.setValue(event.target.value)}
                >
                    <option value="">-- Select Department --</option>
                    {departments.map((department) => (
                        <option key={department.name} value={department.name}>
                            {department.name}
                        </option>
                    ))}
                </select>
            </label>
            {departmentInput.messages.map((message) => (
                <p className="error" key={message}>{message}</p>
            ))}

            <button type="submit">Add Employee</button>
        </form>
    );
}

export default Form;