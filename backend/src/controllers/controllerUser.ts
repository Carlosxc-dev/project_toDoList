import { RepositoryTask } from "../repository/RepositoryTask";

class ControllerUser {
  constructor() {}

  async login(req, res) {
    try {
      const user = req.body;
      const loggedUser = await user.login(user);
      res.status(200).json(loggedUser);
    } catch (error) {
      console.error("Erro ao logar usuário:", error);
      res.status(500).json({ error: "Erro ao logar usuário" });
    }
  }

  async register() {}

  async update() {}

  async delete() {}
}

export { ControllerUser };
