import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  singnIn() {
    return { message: 'i am sign in for user' };
  }

  signUp() {
    return { message: 'i am sign up for user' };
  }
}
