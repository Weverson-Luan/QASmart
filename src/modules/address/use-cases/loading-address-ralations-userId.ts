import { getCustomRepository } from 'typeorm';
import { UsersRepository } from "../../../shared/infra/typeorm/repositories/users-repository";
import { AddressRepository } from "../../../shared/infra/typeorm/repositories/address-repository";

class LoadingAddressUserIdUseCases{
  async execute(user_id: string){
    const usersRepository = getCustomRepository(UsersRepository);
    const addressRepository = getCustomRepository(AddressRepository);

    const user = await usersRepository.findOne(user_id); 

    const userAlreadyExists = user;

    if(!userAlreadyExists){
      throw new Error("Users is not exists !");
    };

    const address = addressRepository.findOne({
      where: {
        user_id : user_id
      }
    });

    const addressAlreadyExists = address;


    if(!addressAlreadyExists){
      throw new Error("Address is not exists !");
    };


    return addressAlreadyExists;

  };
};

export {
  LoadingAddressUserIdUseCases,
};