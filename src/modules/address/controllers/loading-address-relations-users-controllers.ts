import { Request, Response } from "express";
import { LoadingAddressRelationsUsersUseCases } from "../use-cases/loading-address-relations-users-use-cases";

class LoadingAddressRelationsUsersController {
  async handle(request: Request, response: Response): Promise<Response>{
    const loadingAddressRelationsUsersUseCases = new LoadingAddressRelationsUsersUseCases();

    const loadingAddressRelationsUsers = await loadingAddressRelationsUsersUseCases.execute();

    return response.status(200).json({
      error: false,
      data: loadingAddressRelationsUsers,
    });
  }
};

export {
  LoadingAddressRelationsUsersController,
};