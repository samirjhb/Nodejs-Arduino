/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const CreacionUser = await this.UserRepository.create(createUserDto);
    return this.UserRepository.save(CreacionUser);
  }

  findAll() {
    return this.UserRepository.find();
  }

  async findOne(userID: string) {
    const user = await this.UserRepository.findOne({
      where: {
        userID,
      },
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
