import type { FormEvent } from "react";
import useForm from "../../hooks/useForm";
import roleService from "../../services/roleService";
import "../form/Form.css";

function RoleForm({ onRoleAdded }: { onRoleAdded: () => void }) {
    const form = useForm();

    const onSubmit = (event: FormEvent) => {
        const saved = form.handleSubmit(event, (firstName, lastName, roleTitle) => {
            return roleService.tryCreateRole(firstName, lastName, roleTitle);
        });

        if (saved) {
            onRoleAdded();
        }
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <h2>Add Role</h2>

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
                Role
                <input
                    type="text"
                    value={form.extra.value}
                    onChange={(event) => form.extra.setValue(event.target.value)}
                />
            </label>
            {form.extra.messages.map((message) => (
                <p className="error" key={message}>{message}</p>
            ))}

            <button type="submit">Add Role</button>
        </form>
    );
}

export default RoleForm;