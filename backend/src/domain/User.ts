interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

class User {
  private id: number;
  private name: string;
  private email: string;
  private password: string;

  constructor({ id, name, email, password }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async login() {}

  async register() {}

  async update() {}

  async delete() {}
}

export { User };
