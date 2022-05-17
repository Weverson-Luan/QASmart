import { getCustomRepository } from "typeorm";

import { IUsersCreate } from "../dtos/users-create.dto";
import { UsersRepository } from "../../../shared/infra/typeorm/repositories/users-repository";


class UsersCreateUseCases {

  async execute({ 
    name, 
    email, 
    password, 
    confirmed_password, 
    file, 
    isLogged }: IUsersCreate): Promise<void>{

    const usersRepository = getCustomRepository(UsersRepository);

    const user = usersRepository.create({
      name,
      file,
      email,
      password,
      confirmed_password,
      isLogged
    });

      await usersRepository.save(user);
 
    };
};

export {
  UsersCreateUseCases,
};