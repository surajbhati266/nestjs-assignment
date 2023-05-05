import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { addresses: true },
    });
  }

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
  }

  async createAddress(userId: number, data: CreateAddressDto) {
    return this.prisma.address.create({
      data: {
        street: data.street,
        city: data.city,
        state: data.state,
        country: data.country,
        zipCode: data.zipCode,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async findAddress(id: number) {
    return this.prisma.address.findUnique({
      where: { id },
      include: { user: true },
    });
  }
}
