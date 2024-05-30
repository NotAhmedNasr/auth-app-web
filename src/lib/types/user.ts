import { SignUpData } from './auth';

export interface AppUser extends Omit<SignUpData, 'password'> {
  createdAt: string;
  updatedAt: string;
  id: string;
}
