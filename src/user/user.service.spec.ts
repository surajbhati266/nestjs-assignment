import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from './user.service';
import { User } from '@prisma/client';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.user.deleteMany({});
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const user: User = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
      const result = await service.create(user);
      expect(result).toMatchObject(user);
    });
  });

  describe('getUserById', () => {
    it('should return a user by ID', async () => {
      const user: User = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
      await prisma.user.create({ data: user });
      const result = await service.findOne(1);
      expect(result).toMatchObject(user);
    });
  });

  describe('getUsers', () => {
    it('should return a list of users', async () => {
      const users: User[] = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
        },
      ];
      await prisma.user.createMany({ data: users });
      const result = await service.findOne(1);
      expect(result).toMatchObject(users);
    });
  });
});
