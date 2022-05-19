import { EntityRepository, Repository } from "typeorm";
import { AddressEntity } from "../entity/address";

@EntityRepository(AddressEntity)
class AddressRepository extends Repository<AddressEntity>{

};
export {
  AddressRepository,
};
