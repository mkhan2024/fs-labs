import prisma from "../../../lib/prisma.js";
import type { Department, Employee } from "../../../types.js";

const employeeRepository = {
  async getDepartments(): Promise<Department[]> {
    const departments = await prisma.department.findMany({
      include: { employees: true }
    });

    return departments.map((department) => ({
      name: department.name,
      employees: department.employees.map((employee) => ({
        firstName: employee.firstName,
        lastName: employee.lastName ?? undefined
      }))
    }));
  },

  async createEmployee(firstName: string, lastName: string, departmentName: string): Promise<Employee> {
    const department = await prisma.department.findUnique({
      where: { name: departmentName }
    });

    if (!department) {
      throw new Error("Department not found");
    }

    const employee = await prisma.employee.create({
      data: {
        firstName,
        lastName: lastName || null,
        departmentId: department.id
      }
    });

    return {
      firstName: employee.firstName,
      lastName: employee.lastName ?? undefined
    };
  }
};

export default employeeRepository;