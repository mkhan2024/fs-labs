import type { Role } from "../../types";
import RoleForm from "./RoleForm";
import "./Organization.css";

function Organization({
    roles,
    onRoleAdded
}: {
    roles: Role[];
    onRoleAdded: () => void;
}) {
    return (
        <main>
            <h2>Organization</h2>
            <ul className="role-list">
                {roles.map((person) => (
                    <li key={person.role}>
                        <span>{person.firstName + " " + person.lastName}</span>
                        <span>{person.role}</span>
                    </li>
                ))}
            </ul>
            <RoleForm onRoleAdded={onRoleAdded} />
        </main>
    );
}

export default Organization;