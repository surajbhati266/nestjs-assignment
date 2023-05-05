import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): Promise<import(".prisma/client").User & {
        addresses: import(".prisma/client").Address[];
    }>;
    create(data: CreateUserDto): Promise<import(".prisma/client").User>;
    createAddress(userId: number, data: CreateAddressDto): Promise<import(".prisma/client").Address>;
    findAddress(id: number): Promise<import(".prisma/client").Address & {
        user: import(".prisma/client").User;
    }>;
}
