import departmentsJson from "../../../data/departments.json" with { type: "json" };
import type { Department, Employee } from "../../../../../shared/types/index.js";

let departments: Department[] = (departmentsJson as Department[]).map((department) => ({
  name: department.name,
  employees: department.employees.map((employee) => ({ ...employee }))
}));

const employeeRepository = {
  getDepartments(): Department[] {
    return departments.map((department) => ({
      name: department.name,
      employees: department.employees.map((employee) => ({ ...employee }))
    }));
  },

  createEmployee(firstName: string, lastName: string, departmentName: string): Employee {
    const employee: Employee = { firstName };
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

export default employeeRepository;