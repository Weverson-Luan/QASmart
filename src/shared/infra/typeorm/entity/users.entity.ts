import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as UuidV4 } from "uuid";


@Entity("users")
class UserEntity{

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  file: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  confirmed_password: string;

  @Column()
  isLogged: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = UuidV4();
    };
  };
};

export { 
  UserEntity
};