import { Request, Response, NextFunction } from "express";
import { CustomError } from "../config/CustomError";
import z from "zod";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	// Verifica se o erro é uma instância de CustomError
	if (err instanceof CustomError) {
		// Se for, envia uma resposta com o código de status e o objeto serializado
		return res.status(err.statusCode).json(err.serialize());
	}

	// Verifica se o erro é uma instância de ZodError
	if (err instanceof z.ZodError) {
		return res.status(400).json({
			message: "Erro de validação",
			erro: err.errors // Detalhes dos erros de validação
		});
	}

	// Loga o erro genérico no console para ajudar na depuração
	console.error("Erro desconhecido:", err);

	// Caso seja um erro genérico, retorna uma resposta 500 (Internal Server Error)
	return res.status(500).send({
		message: "Something went wrong",
	});

	// Chame next se desejar passar o erro para outro middleware de erro
	// next(err);
};

export { errorHandler };
