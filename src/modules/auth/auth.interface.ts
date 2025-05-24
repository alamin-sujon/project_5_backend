export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  image: string;
}
export interface ILoginUser {
  email: string;
  password: string;
}
