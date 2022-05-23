import { Request, Response } from "express";
import { LoadingAddressUseCases } from "../use-cases/loading-address-use-cases";

class LoadingAddressController {
  async handle(request: Request, response: Response): Promise<Response>{
    const loadingAddressUseCases = new LoadingAddressUseCases();

    const loadingAddressUsers = await loadingAddressUseCases.execute();

    return response.status(200).json({
      error: false,
      data: loadingAddressUsers,
    });
  }
};

export {
  LoadingAddressController,
};