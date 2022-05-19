import { getCustomRepository } from "typeorm";
import { AddressEntity } from "../../../shared/infra/typeorm/entity/address";
import { AddressRepository } from "../../../shared/infra/typeorm/repositories/address-repository";
import { ICreateAddressDTO } from "../dtos/create-address-dtos";

class CreateAddressUseCases {

  async execute({
    uf,
    city,
    district,
    street,
    number,
    complement,
  }: ICreateAddressDTO): Promise<AddressEntity>{
    const addressRepository = getCustomRepository(AddressRepository);

    const address = addressRepository.create({
      uf,
      city,
      district,
      street,
      number,
      complement,
    });

    await addressRepository.save(address);

    return address;
  };

};

export {
  CreateAddressUseCases,
};