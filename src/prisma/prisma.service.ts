import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/prisma-client';

@Injectable()
export class PrismaService extends PrismaClient {
  userCreateInput: any;
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:123@localhost:5432/nest?schema=public',
        },
      },
    });
  }
}
