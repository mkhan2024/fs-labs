import type { FormEvent } from "react";
import type { Department } from "../../types";
import useForm from "../../hooks/useForm";
import employeeService from "../../services/employeeService";
import "./Form.css";

function Form({
  departments,
  onEmployeeAdded
}: {
  departments: Department[];
  onEmployeeAdded: () => void;
}) {
  const form = useForm();

  const onSubmit = async (event: FormEvent) => {
    const saved = await form.handleSubmit(event, async (firstName, lastName, departmentName) => {
      const result = await employeeService.tryCreateEmployee(firstName, lastName, departmentName);
      return {
        ok: result.ok,
        firstNameMessages: result.firstNameMessages,
        extraMessages: result.departmentMessages
      };
    });

    if (saved) {
      onEmployeeAdded();
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <h2>Add Employee</h2>

      <label>
        First Name
        <input
          type="text"
          value={form.firstName.value}
          onChange={(event) => form.firstName.setValue(event.target.value)}
        />
      </label>
      {form.firstName.messages.map((message) => (
        <p className="error" key={message}>{message}</p>
      ))}

      <label>
        Last Name
        <input
          type="text"
          value={form.lastName.value}
          onChange={(event) => form.lastName.setValue(event.target.value)}
        />
      </label>
      {form.lastName.messages.map((message) => (
        <p className="error" key={message}>{message}</p>
      ))}

      <label>
        Department
        <select
          value={form.extra.value}
          onChange={(event) => form.extra.setValue(event.target.value)}
        >
          <option value="">-- Select Department --</option>
          {departments.map((department) => (
            <option key={department.name} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </label>
      {form.extra.messages.map((message) => (
        <p className="error" key={message}>{message}</p>
      ))}

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default Form;