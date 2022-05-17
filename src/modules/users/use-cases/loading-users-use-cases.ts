import { UserEntity } from "shared/infra/typeorm/entity/users.entity";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../../shared/infra/typeorm/repositories/users-repository";

class LoadingUsersUseCase {

  async execute(): Promise<UserEntity[]>{
    const loadingUsersRepository = getCustomRepository(UsersRepository);
    
    const users = await loadingUsersRepository.find();

    if(!users){
      throw new Error("Não possui nenhum usuário cadastro na sua base de dado.");
    };

    return users;
  };

};

export {
  LoadingUsersUseCase,
};