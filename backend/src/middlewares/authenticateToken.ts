import { Request, Response, NextFunction } from "express";
import { Auth } from "../auth/auth";
import { AuthenticationError } from "../err/authenticateError";

class AuthenticateToken {
  private auth: Auth;
  constructor() {
    this.auth = new Auth();
    this.protected = this.protected.bind(this);
  }

  public protected(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.token;

      if (!token) {
        throw new AuthenticationError("users not authorized --");
      }

      const decoded = this.auth.verifyToken(token);

      if (!decoded) {
        throw new AuthenticationError("Invalid or expired token");
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export { AuthenticateToken };
