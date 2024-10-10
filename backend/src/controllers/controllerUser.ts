import { NextFunction, Request, Response } from "express";
import { RepositoryTask } from "../repository/RepositoryTask";
import {
  validationCreateUserSchema,
  validationLoginUserSchema,
} from "../validation/validationUser";
import { ResponseSuccess } from "../config/ResponseSuccess";
import { Auth } from "../auth/auth";
import { UserService } from "../services/userService";
import { AuthenticationError } from "../err/authenticateError";

class ControllerUser {
  private auth: Auth;
  private userService = new UserService();
  constructor() {
    this.auth = new Auth();
    this.userService = new UserService();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const parseData = validationCreateUserSchema.parse(data);

      const hashPassword = await this.auth.hashPassword(parseData.password);
      parseData.password = hashPassword;

      const result = await this.userService.loginUser(parseData);
      return res
        .status(ResponseSuccess.userCreated.statusCode)
        .json({ message: ResponseSuccess.userCreated.message, data: result });
    } catch (error) {
      next(error); // Passa o erro para o middleware de tratamento de erros
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      const parseData = validationLoginUserSchema.parse(data);
      let mytoken = "";

      const hashedPassword = await this.userService.findHash(parseData.email);
      const is_password = await this.auth.comparePassword(
        parseData.password,
        hashedPassword
      );

      if (!is_password) {
        throw new AuthenticationError("Password is incorrect");
      }

      const result = await this.userService.createUser(parseData);

      if (result) {
        mytoken = this.auth.generateToken(result.email);
      }
      return res
        .status(ResponseSuccess.loginSuccess.statusCode)
        .send({
          message: ResponseSuccess.loginSuccess.message,
          data: result,
          token: mytoken,
        });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {}

  async delete(req: Request, res: Response, next: NextFunction) {}
}

export { ControllerUser };
