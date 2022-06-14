import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as UuidV4 } from "uuid";


@Entity("products")
class ProductEntity{

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = UuidV4();
    };
  };
};

export { 
  ProductEntity,
};