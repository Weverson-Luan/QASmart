import { EntityRepository, Repository } from "typeorm";
import { ProductEntity } from "../entity/products.entity";

@EntityRepository(ProductEntity)
class ProductRepository extends Repository<ProductEntity>{

};

export {
  ProductRepository,
};