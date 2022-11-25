import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConexionArduinoDto } from './dto/create-conexion-arduino.dto';
import { UpdateConexionArduinoDto } from './dto/update-conexion-arduino.dto';
import { ConexionArduino } from './entities/conexion-arduino.entity';

@Injectable()
export class ConexionArduinoService {
  constructor(
    @InjectRepository(ConexionArduino)
    private conexionArduinoRepo: Repository<ConexionArduino>,
  ) {}

  async create(createConexionArduinoDto: CreateConexionArduinoDto) {
    const CreacionUser = await this.conexionArduinoRepo.create(
      createConexionArduinoDto,
    );
    return this.conexionArduinoRepo.save(CreacionUser);
  }

  findAll() {
    return this.conexionArduinoRepo.find();
  }

  async findOne(userID: string) {
    const user = await this.conexionArduinoRepo.findOne({
      where: {
        userID,
      },
    });

    return user;
  }

  update(id: number, updateConexionArduinoDto: UpdateConexionArduinoDto) {
    return `This action updates a #${id} conexionArduino`;
  }

  remove(id: number) {
    return `This action removes a #${id} conexionArduino`;
  }
}
