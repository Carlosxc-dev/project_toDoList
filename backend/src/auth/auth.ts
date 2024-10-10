import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class Auth {
	private JWT_SECRET: string;

	constructor() {
		this.JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
	}

	public generateToken(userName: string): string {
		return jwt.sign({ id: userName }, this.JWT_SECRET, { expiresIn: "2m" });
	}

	public verifyToken(token: string): any {
		try {
			return jwt.verify(token, this.JWT_SECRET);
		} catch (erro) {
			console.log(erro);
			return null;
		}
	}

	public async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
		return await bcrypt.compare(password, hashedPassword);
	}
}

export { Auth };

