import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUserDto } from './dto';
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async addUser(dto: AddUserDto) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        email: dto.email,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (userExists) throw new BadRequestException('Email already exists');

    const user = await this.prismaService.user.create({
      data: dto,
    });

    return user;
  }

  async getUsers() {
    const users = await this.prismaService.user.findMany({});
    return users;
  }
}
