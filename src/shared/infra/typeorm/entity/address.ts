import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as UuidV4} from "uuid";

@Entity("address")
class AddressEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  uf: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = UuidV4()
    };
  };

};

export{
  AddressEntity,
};