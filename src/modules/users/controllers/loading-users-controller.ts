import { Request, Response } from "express";
import { LoadingUsersUseCase } from "../use-cases/loading-users-use-cases";

class LoadingUsersController {

   async handle(request:Request, response: Response): Promise<Response>{
    try {
      const loadingUsersUseCase = new LoadingUsersUseCase();

      const users = await loadingUsersUseCase.execute();

      return response.status(200).json({
        error: false,
        data: users,
      });
      
    } catch (error) {
      console.log("Error buscars usuários", error);
    };
  };
};

export {
  LoadingUsersController,
};