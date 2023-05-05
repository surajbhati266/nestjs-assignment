import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findOne(id: string): Promise<import(".prisma/client").User & {
        addresses: import(".prisma/client").Address[];
    }>;
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    createAddress(id: string, createAddressDto: CreateAddressDto): Promise<import(".prisma/client").Address>;
}
export declare class AddressController {
    private readonly userService;
    constructor(userService: UserService);
    findOne(id: string): Promise<import(".prisma/client").Address & {
        user: import(".prisma/client").User;
    }>;
}
