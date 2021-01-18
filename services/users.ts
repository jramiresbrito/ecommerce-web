import 'dotenv/config';
import api from './api';
import User from '../dtos/User';

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: User;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const UsersService = {
  signUp: ({ name, email, password, password_confirmation }: SignUpData) =>
    api.post<void>(process.env.SIGN_UP_URL, {
      name,
      email,
      password,
      password_confirmation
    }),
  signIn: ({ email, password }: SignInData) =>
    api.post<SignInResponse>(process.env.SIGN_IN_URL, {
      email,
      password
    }),
};

export default UsersService;
