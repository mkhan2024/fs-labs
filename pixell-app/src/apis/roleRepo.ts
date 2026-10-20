import rolesJson from "../data/roles.json";
import type { Role } from "../types";

// temp list, same data as the organization page
let roles: Role[] = (rolesJson as Role[]).map((role) => ({ ...role }));

const roleRepo = {
    getRoles(): Role[] {
        return roles.map((role) => ({ ...role }));
    },

    createRole(firstName: string, lastName: string, roleTitle: string): Role {
        const role: Role = {
            firstName: firstName,
            lastName: lastName,
            role: roleTitle
        };
        roles = [...roles, role];
        return role;
    },

    updateRole(roleTitle: string, next: Role): Role | undefined {
        let updated: Role | undefined;
        roles = roles.map((role) => {
            if (role.role !== roleTitle) {
                return role;
            }
            updated = { ...next };
            return updated;
        });
        return updated;
    },

    deleteRole(roleTitle: string): boolean {
        const before = roles.length;
        roles = roles.filter((role) => role.role !== roleTitle);
        return roles.length < before;
    }
};

export default roleRepo;