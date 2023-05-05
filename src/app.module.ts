import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController, AddressController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, AddressController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
