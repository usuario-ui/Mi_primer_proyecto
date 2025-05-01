import { Injectable, OnModuleInit,Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('UserService')
  onModuleInit() {
    this.$connect();
    this.logger.log("Base de datos conectada  correctamente");
  }

  create(createUserDto: CreateUserDto) {
    return this.user.create({
      data: createUserDto,
    })
  }

  findAll() {
    return  this.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
