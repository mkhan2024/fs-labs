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
  async getRoles(): Promise<Role[]> {
    return roleRepo.getRoles();
  },

  async tryCreateRole(firstName: string, lastName: string, roleTitle: string): Promise<CreateRoleResult> {
    try {
      const role = await roleRepo.createRole(firstName, lastName, roleTitle);
      const roles = await roleRepo.getRoles();
      return {
        ok: true,
        role,
        roles,
        firstNameMessages: [],
        extraMessages: []
      };
    } catch (error: any) {
      const roles = await roleRepo.getRoles();
      return {
        ok: false,
        roles,
        firstNameMessages: error.firstNameMessages || [],
        extraMessages: error.extraMessages || ["Failed to create role"]
      };
    }
  }
};

export default roleService;