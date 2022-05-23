import { getCustomRepository } from "typeorm";

import { AddressEntity } from "shared/infra/typeorm/entity/address";
import { AddressRepository } from "../../../shared/infra/typeorm/repositories/address-repository";


class LoadingAddressRelationsUsersUseCases {
    async execute(): Promise<AddressEntity[]>{
      const loadingAddressRelationsUsersUseCases = getCustomRepository(AddressRepository);

      const loadingAddressRelationsUsers = await loadingAddressRelationsUsersUseCases.find({
        relations: ["user_id"]
      });

      return loadingAddressRelationsUsers;
    };
};

export{
  LoadingAddressRelationsUsersUseCases,
};