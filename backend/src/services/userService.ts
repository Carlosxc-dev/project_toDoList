import { z } from "zod";
import { IUserDTO } from "../domain/User";
import { BadRequestError } from "../err/badRequestError";
import { NotFoundError } from "../err/NotFoundError";
import { RepositoryUser } from "../repository/RepositoryUser";
import { validationLoginUserSchema } from "../validation/validationUser";

class UserService {
  private repositoryUser: RepositoryUser;
  constructor() {
    this.repositoryUser = RepositoryUser.getInstance();
  }

  public async createUser(data: IUserDTO) {
    const response = await this.repositoryUser.read(data.email);

    if (response) {
      throw new NotFoundError("User already exists");
    }

    const dataUser = await this.repositoryUser.create(data);

    return dataUser;
  }

  public async loginUser(data: z.infer<typeof validationLoginUserSchema>) {
    const result = await this.repositoryUser.findbyusername(data.email);

    if (!result) {
      throw new BadRequestError("users doesn't exist !!");
    }

    return result;
  }

  public async findHash(email: string) {
    const result = await this.repositoryUser.findbyusername(email);

    if (!result) {
      throw new NotFoundError("user nao existe -- !");
    }

    return result.password;
  }
}

export { UserService };
