import type { Request, Response } from "express";
import employeeService from "../services/employeeService.js";

const employeeController = {
  async getDepartments(_req: Request, res: Response) {
    const departments = await employeeService.getDepartments();
    res.json(departments);
  },

  async createEmployee(req: Request, res: Response) {
    const { firstName, lastName, departmentName } = req.body as {
      firstName?: string;
      lastName?: string;
      departmentName?: string;
    };

    const result = await employeeService.tryCreateEmployee(
      firstName ?? "",
      lastName ?? "",
      departmentName ?? ""
    );

    if (!result.ok) {
      return res.status(400).json({
        firstNameMessages: result.firstNameMessages,
        departmentMessages: result.departmentMessages
      });
    }

    res.status(201).json(result.employee);
  }
};

export default employeeController;