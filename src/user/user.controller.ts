/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateAddressDto } from './dto/create-address.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiBody({ type: CreateUserDto })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Create address for user by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: CreateAddressDto })
  @Post(':id/address')
  async createAddress(@Param('id') id: string, @Body() createAddressDto: CreateAddressDto) {
    return this.userService.createAddress(Number(id), createAddressDto);
  }
}

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get address by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findAddress(Number(id));
  }
}
