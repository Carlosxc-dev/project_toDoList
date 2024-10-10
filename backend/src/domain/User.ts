interface IUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
}

interface User {
  login(data: IUserDTO): Promise<IUserDTO | null>;
  register(data: IUserDTO): Promise<IUserDTO | null>;
  //update();
  //delete();
}

export { User, IUserDTO };
