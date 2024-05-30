import { AppUser } from './user';

export interface SignUpData {
  email: string;
  name: string;
  password: string;
}

export interface SignUpResponse {
  token: string;
  user: AppUser;
}

export type SignInData = Omit<SignUpData, 'name'>;
