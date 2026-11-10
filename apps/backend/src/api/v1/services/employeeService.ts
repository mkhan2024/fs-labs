import employeeRepository from "../repositories/employeeRepository.js";
import type { Department, Employee } from "../../../../../shared/types/index.js";

export interface CreateEmployeeResult {
  ok: boolean;
  employee?: Employee;
  departments: Department[];
  firstNameMessages: string[];
  departmentMessages: string[];
}

const employeeService = {
  async getDepartments(): Promise<Department[]> {
    return employeeRepository.getDepartments();
  },

  async tryCreateEmployee(firstName: string, lastName: string, departmentName: string): Promise<CreateEmployeeResult> {
    const firstNameMessages: string[] = [];
    const departmentMessages: string[] = [];
    const cleanFirst = firstName.trim();
    const cleanLast = lastName.trim();
    const departments = await employeeRepository.getDepartments();

    if (cleanFirst.length < 3) {
      firstNameMessages.push("First name must be at least 3 characters.");
    }

    const found = departments.some((department) => department.name === departmentName);
    if (!found) {
      departmentMessages.push("Employee must be in an existing department.");
    }

    if (firstNameMessages.length > 0 || departmentMessages.length > 0) {
      return {
        ok: false,
        departments,
        firstNameMessages,
        departmentMessages
      };
    }

    const employee = await employeeRepository.createEmployee(cleanFirst, cleanLast, departmentName);
    return {
      ok: true,
      employee,
      departments: await employeeRepository.getDepartments(),
      firstNameMessages,
      departmentMessages
    };
  }
};

export default employeeService;