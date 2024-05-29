export interface SignUpData {
  email: string;
  name: string;
  password: string;
}

export interface SignUpResponse {
  token: string;
  user: SignUpData;
}
