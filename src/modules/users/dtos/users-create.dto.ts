
interface IUsersCreate{
  id?: string;
  name: string;
  file: string;
  email: string;
  password: string;
  confirmed_password: string;
  isLogged: boolean;
  created_at?: Date;
};


export {
  IUsersCreate,
}