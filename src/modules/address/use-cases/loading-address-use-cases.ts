import { getCustomRepository } from "typeorm";

import { AddressEntity } from "shared/infra/typeorm/entity/address";
import { AddressRepository } from "../../../shared/infra/typeorm/repositories/address-repository";


class LoadingAddressUseCases {
    async execute(): Promise<AddressEntity[]>{
      const loadingAddressUseCases = getCustomRepository(AddressRepository);

      const loadingAddressUsers = await loadingAddressUseCases.find();

      return loadingAddressUsers;
    };
};

export{
  LoadingAddressUseCases,
};