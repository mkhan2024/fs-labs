import departmentsJson from "../data/departments.json";
import type { Department, Employee } from "../types";

// temp list, same data as lab 2
let departments: Department[] = (departmentsJson as Department[]).map((department) => ({
    name: department.name,
    employees: department.employees.map((employee) => ({ ...employee }))
}));

const employeeRepo = {
    // employees come back in their department
    getDepartments(): Department[] {
        return departments.map((department) => ({
            name: department.name,
            employees: department.employees.map((employee) => ({ ...employee }))
        }));
    },

    createEmployee(firstName: string, lastName: string, departmentName: string): Employee {
        const employee: Employee = { firstName: firstName };
        if (lastName !== "") {
            employee.lastName = lastName;
        }

        departments = departments.map((department) => {
            if (department.name !== departmentName) {
                return department;
            }
            return {
                ...department,
                employees: [...department.employees, employee]
            };
        });

        return employee;
    }
};

export default employeeRepo;