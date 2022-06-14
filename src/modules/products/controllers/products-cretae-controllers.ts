import { Request, Response,  } from "express";
import { ProductsCreateUseCases } from "../use-cases/products-create-use-cases";


class ProductsCreateControllers{

  async handle(request: Request, response: Response):Promise<Response>{
    const { name, description, quantity, price } = request.body;

    const productsCreateUseCases = new ProductsCreateUseCases();

    await productsCreateUseCases.execute({
        name,
        description,
        quantity,
        price
      });

    return response.status(200).json({
      error: false,
      message: "Usuário Cadastrado com sucesso !!!" 
    });
  }
};

export {
  ProductsCreateControllers,
};
