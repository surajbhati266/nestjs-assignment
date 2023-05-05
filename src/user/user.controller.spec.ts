import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('create', () => {
    it('should create a user', async () => {
      const userDto: CreateUserDto = {
        name: 'John',
        email: 'john@example.com',
      };
      const result = { id: 1, ...userDto, addresses: [] };
      jest
        .spyOn(service, 'create')
        .mockImplementation(() => Promise.resolve(result));
      expect(await controller.create(userDto)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a user by ID', async () => {
      const result = {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        addresses: [],
      };
      jest
        .spyOn(service, 'findOne')
        .mockImplementation(() => Promise.resolve(result));
      expect(await controller.findOne('1')).toBe(result);
    });
  });
});
