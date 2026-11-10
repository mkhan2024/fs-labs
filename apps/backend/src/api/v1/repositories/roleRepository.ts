import prisma from "../../../lib/prisma.js";
import type { Role } from "../../../../../shared/types/index.js";

const roleRepository = {
  async getRoles(): Promise<Role[]> {
    const roles = await prisma.role.findMany();

    return roles.map((role) => ({
      firstName: role.firstName,
      lastName: role.lastName,
      role: role.role
    }));
  },

  async createRole(firstName: string, lastName: string, roleTitle: string): Promise<Role> {
    const role = await prisma.role.create({
      data: {
        firstName,
        lastName,
        role: roleTitle
      }
    });

    return {
      firstName: role.firstName,
      lastName: role.lastName,
      role: role.role
    };
  }
};

export default roleRepository;