import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //makes this module global
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
