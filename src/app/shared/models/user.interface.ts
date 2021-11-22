export type Roles = 'SUSCRIPTOR' | 'ADMIN';
export interface User {
  username: string;
  password: string;
}
export interface UserResponse extends User {
  message: string;
  cedula : string;
  cedulafamiliar: string;
  token: string;
  userId: number;
  role: Roles;
}
