import { Request, Response} from "express";
import { CreateAddressUseCases } from "../use-cases/create-address-use-cases";

class CreateAddressController{

  async handle(request: Request, response: Response): Promise<Response>{
  const { uf, city, district, street, number, complement, user_id } = request.body;

  const createAddressUseCases = new CreateAddressUseCases();

  const address = await createAddressUseCases.execute({
    uf,
    city,
    district,
    street,
    number,
    complement,
    user_id
  });

  return response.status(201).json({
    message: false,
    data: address,
  });
  };
};

export{
  CreateAddressController,
};