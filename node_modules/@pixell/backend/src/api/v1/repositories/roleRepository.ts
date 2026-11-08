import rolesJson from "../../../data/roles.json" with { type: "json" };
import type { Role } from "../../../../../shared/types/index.js";

let roles: Role[] = (rolesJson as Role[]).map((role) => ({ ...role }));

const roleRepository = {
  getRoles(): Role[] {
    return roles.map((role) => ({ ...role }));
  },

  createRole(firstName: string, lastName: string, roleTitle: string): Role {
    const role: Role = {
      firstName,
      lastName,
      role: roleTitle
    };
    roles = [...roles, role];
    return role;
  }
};

export default roleRepository;