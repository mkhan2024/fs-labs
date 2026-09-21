import rolesJson from "../../data/roles.json";
import type { Role } from "../../types";
import "./Organization.css";

const roles = rolesJson as Role[];

function Organization() {
    return (
        <main>
            <h2>Organization</h2>
            <ul className="role-list">
                {roles.map((person) => (
                    <li key={person.firstName + person.lastName}>
                        <span>{person.firstName + " " + person.lastName}</span>
                        <span>{person.role}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Organization;