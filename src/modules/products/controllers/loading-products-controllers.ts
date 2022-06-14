import { Request, Response } from "express";
import { LoadingProductsUseCase } from "../use-cases/loading-products-use-case";

class LoadingUsersController {

   async handle(request:Request, response: Response): Promise<Response>{
    try {
      const loadingProductsUseCase = new LoadingProductsUseCase();

      const products = await loadingProductsUseCase.execute();

      return response.status(200).json({
        error: false,
        data: products,
      });
      
    } catch (error) {
      console.log("Error buscars produtos", error);
    };
  };
};

export {
  LoadingUsersController,
};