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
    getDepartments(): Department[] {
        return employeeRepo.getDepartments();
    },

    // try to add someone. tell the hook what failed
    tryCreateEmployee(firstName: string, lastName: string, departmentName: string): CreateEmployeeResult {
        const firstNameMessages: string[] = [];
        const departmentMessages: string[] = [];
        const cleanFirst = firstName.trim();
        const cleanLast = lastName.trim();
        const departments = employeeRepo.getDepartments();

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

        const employee = employeeRepo.createEmployee(cleanFirst, cleanLast, departmentName);
        return {
            ok: true,
            employee,
            departments: employeeRepo.getDepartments(),
            firstNameMessages,
            departmentMessages
        };
    }
};

export default employeeService;