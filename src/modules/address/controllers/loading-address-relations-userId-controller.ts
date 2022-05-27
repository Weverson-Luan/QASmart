import { Request, Response } from "express";
import { LoadingAddressUserIdUseCases } from "../use-cases/loading-address-ralations-userId";

class LoadingAddressUserIdController{
  async handle(request: Request, response: Response){
    const { user_id } = request.params;
    const loadingAddressUserIdUseCases = new LoadingAddressUserIdUseCases();

    const address = await loadingAddressUserIdUseCases.execute(user_id);

    return response.json({
      message: false,
      data: address,
    });
  }
};

export{
  LoadingAddressUserIdController,
};