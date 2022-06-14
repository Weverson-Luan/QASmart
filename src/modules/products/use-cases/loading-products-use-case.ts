import { getCustomRepository } from "typeorm";
import { ProductEntity } from "shared/infra/typeorm/entity/products.entity";
import { ProductRepository } from "../../../shared/infra/typeorm/repositories/products-repository";

class LoadingProductsUseCase {

  async execute(): Promise<ProductEntity[]>{
    const loadingUsersRepository = getCustomRepository(ProductRepository);
    
    const products = await loadingUsersRepository.find();

    if(!products){
      throw new Error("Não possui nenhum produto cadastro na base de dado.");
    };

    return products;
  };

};

export {
  LoadingProductsUseCase,
};