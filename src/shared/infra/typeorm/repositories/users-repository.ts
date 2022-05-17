import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entity/users.entity";

@EntityRepository(UserEntity)
class UsersRepository extends Repository<UserEntity>{

};

export {
  UsersRepository,
};