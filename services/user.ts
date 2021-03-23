import api from './api';
import User from '../dtos/User';

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: User
}

const UsersService = {
  signIn: ({ email, password }: SignInData) => 
    api.post<SignInResponse>('auth/v1/user/sign_in', {
      email,
      password
    }),
}

export default UsersService;