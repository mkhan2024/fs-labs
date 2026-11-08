import type { Department, Employee } from "../types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const response = await fetch(`${BASE_URL}/api/v1/employees`);
    if (!response.ok) {
      throw new Error("Failed to load departments");
    }
    return response.json();
  },

  async createEmployee(firstName: string, lastName: string, departmentName: string): Promise<Employee> {
    const response = await fetch(`${BASE_URL}/api/v1/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, departmentName })
    });

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    return response.json();
  }
};

export default employeeRepo;