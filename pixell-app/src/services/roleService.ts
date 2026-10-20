import roleRepo from "../apis/roleRepo";
import type { Role } from "../types";

export interface CreateRoleResult {
    ok: boolean;
    role?: Role;
    roles: Role[];
    firstNameMessages: string[];
    extraMessages: string[];
}

const roleService = {
    getRoles(): Role[] {
        return roleRepo.getRoles();
    },

    // try to add a person to a role
    tryCreateRole(firstName: string, lastName: string, roleTitle: string): CreateRoleResult {
        const firstNameMessages: string[] = [];
        const extraMessages: string[] = [];
        const cleanFirst = firstName.trim();
        const cleanLast = lastName.trim();
        const cleanRole = roleTitle.trim();
        const roles = roleRepo.getRoles();

        if (cleanFirst.length < 3) {
            firstNameMessages.push("First name must be at least 3 characters.");
        }

        const taken = roles.some((role) => role.role === cleanRole && role.firstName !== "");
        if (cleanRole === "" || taken) {
            extraMessages.push("That role already has someone.");
        }

        if (firstNameMessages.length > 0 || extraMessages.length > 0) {
            return {
                ok: false,
                roles,
                firstNameMessages,
                extraMessages
            };
        }

        const role = roleRepo.createRole(cleanFirst, cleanLast, cleanRole);
        return {
            ok: true,
            role,
            roles: roleRepo.getRoles(),
            firstNameMessages,
            extraMessages
        };
    }
};

export default roleService;