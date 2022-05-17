import { Request, Response,  } from "express";
import { UsersCreateUseCases } from "../use-cases/users-create-use-cases";


class UsersCreateControllers{

  async handle(request: Request, response: Response):Promise<Response>{
    const { name, file, email, password, confirmed_password, isLogged  } = request.body;

    const usersCreateUseCases = new UsersCreateUseCases();

    await usersCreateUseCases.execute({
        name,
        file,
        email,
        password,
        confirmed_password,
        isLogged
      });

    return response.status(200).json({
      error: false,
      message: "Usuário Cadastrado !!" 
    });
  }
};

export {
  UsersCreateControllers
};
