import type { Role } from "../types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const roleRepo = {
  async getRoles(): Promise<Role[]> {
    const response = await fetch(`${BASE_URL}/api/v1/roles`);
    if (!response.ok) {
      throw new Error("Failed to load roles");
    }
    return response.json();
  },

  async createRole(firstName: string, lastName: string, roleTitle: string): Promise<Role> {
    const response = await fetch(`${BASE_URL}/api/v1/roles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, roleTitle })
    });

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    return response.json();
  }
};

export default roleRepo;