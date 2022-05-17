import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../../shared/infra/typeorm/repositories/users-repository";

class LoadingUsersUseCase {

  async execute(){
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