/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto) {
    const CreacionUser = await this.userModel.create(createUserDto);
    return console.log(CreacionUser);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(userID: string) {
    const user = await this.userModel.findOne({
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
