import { AxiosResponse } from 'axios';
import { SignUpData, SignUpResponse } from '../types/auth';
import { axiosInstance } from './axiosInstance';
import { promiseToErrResult } from '../utils/promiseToErrResult';

export const signUp = async (data: SignUpData) => {
  const signUpPromise = axiosInstance
    .post<SignUpResponse, AxiosResponse<SignUpResponse>, SignUpData>(
      '/auth/sign-up',
      data,
    )
    .then(({ data }) => data);
  return promiseToErrResult(signUpPromise);
};
