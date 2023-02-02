import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  singnIn() {
    return { message: 'i am sign in for user' };
  }

  signUp() {
    return { message: 'i am sign up for user' };
  }
}
