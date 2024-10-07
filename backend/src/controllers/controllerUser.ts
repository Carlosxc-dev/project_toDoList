import { NextFunction, Request, Response } from "express";
import { RepositoryTask } from "../repository/RepositoryTask";

class ControllerUser {
  constructor() {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.body;
      const loggedUser = await user.login(user);
      res.status(200).json(loggedUser);
    } catch (error) {
      console.error("Erro ao logar usuário:", error);
      res.status(500).json({ error: "Erro ao logar usuário" });
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {}

  async update(req: Request, res: Response, next: NextFunction) {}

  async delete(req: Request, res: Response, next: NextFunction) {}
}

export { ControllerUser };
