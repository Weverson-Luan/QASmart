
interface IProductCreate{
  id?: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  created_at?: Date;
};


export {
  IProductCreate,
}