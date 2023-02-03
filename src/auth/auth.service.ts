import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signIn() {
    //generate the password

    // save th user to the database

    // return the user
    return { message: 'i am sign in for user' };
  }

  async signUp(dto: AuthDto) {
    //generate the password
    const hash = await argon.hash(dto.password);

    //save th user to the database
    try {
      const user = await this.prisma.user.create({
        data: {
          //id: uniqueId,
          email: dto.email,
          hash,
        },
      });
      delete user.hash;
      // return the user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}
