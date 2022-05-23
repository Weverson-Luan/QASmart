export interface ICreateAddressDTO {
  id?: string;
  uf: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
  user_id: string;
  created_at?: Date;
};