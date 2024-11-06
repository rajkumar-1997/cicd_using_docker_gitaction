import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddUserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async addUser(@Body() dto: AddUserDto) {
    return await this.userService.addUser(dto);
  }

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }
}
