import { getCustomRepository } from 'typeorm';

import { IProductCreate } from '../dtos/create-products';
import { ProductRepository } from '../../../shared/infra/typeorm/repositories/products-repository';


class ProductsCreateUseCases {

  async execute({ 
    name, 
    description,
    price,
    quantity,
   }: IProductCreate): Promise<void>{

    const productRepository = getCustomRepository(ProductRepository);

    const products = productRepository.create({
      name, 
      description,
      price,
      quantity
    });

      await productRepository.save(products);

    };
};

export {
  ProductsCreateUseCases,
};