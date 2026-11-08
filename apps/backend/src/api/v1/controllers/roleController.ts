import type { Request, Response } from "express";
import roleService from "../services/roleService.js";

const roleController = {
  getRoles(_req: Request, res: Response) {
    const roles = roleService.getRoles();
    res.json(roles);
  },

  createRole(req: Request, res: Response) {
    const { firstName, lastName, roleTitle } = req.body as {
      firstName?: string;
      lastName?: string;
      roleTitle?: string;
    };

    const result = roleService.tryCreateRole(
      firstName ?? "",
      lastName ?? "",
      roleTitle ?? ""
    );

    if (!result.ok) {
      return res.status(400).json({
        firstNameMessages: result.firstNameMessages,
        extraMessages: result.extraMessages
      });
    }

    res.status(201).json(result.role);
  }
};

export default roleController;