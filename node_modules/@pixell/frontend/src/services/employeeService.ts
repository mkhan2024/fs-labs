import employeeRepo from "../apis/employeeRepo";
import type { Department, Employee } from "../types";

export interface CreateEmployeeResult {
  ok: boolean;
  employee?: Employee;
  departments: Department[];
  firstNameMessages: string[];
  departmentMessages: string[];
}

const employeeService = {
  async getDepartments(): Promise<Department[]> {
    return employeeRepo.getDepartments();
  },

  async tryCreateEmployee(firstName: string, lastName: string, departmentName: string): Promise<CreateEmployeeResult> {
    try {
      const employee = await employeeRepo.createEmployee(firstName, lastName, departmentName);
      const departments = await employeeRepo.getDepartments();
      return {
        ok: true,
        employee,
        departments,
        firstNameMessages: [],
        departmentMessages: []
      };
    } catch (error: any) {
      const departments = await employeeRepo.getDepartments();
      return {
        ok: false,
        departments,
        firstNameMessages: error.firstNameMessages || [],
        departmentMessages: error.departmentMessages || ["Failed to create employee"]
      };
    }
  }
};

export default employeeService;