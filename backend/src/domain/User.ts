interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface User {
  constructor({ id, name, email, password }: IUser)
  login() 
  register() 
  update() 
  delete() 
}

export { User, IUser };
