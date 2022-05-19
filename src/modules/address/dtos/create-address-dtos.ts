export interface ICreateAddressDTO {
  id?: string;
  uf: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
  created_at?: Date;
};