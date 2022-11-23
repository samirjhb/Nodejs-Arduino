import { Injectable } from '@nestjs/common';
import { CreateConexionArduinoDto } from './dto/create-conexion-arduino.dto';
import { UpdateConexionArduinoDto } from './dto/update-conexion-arduino.dto';

@Injectable()
export class ConexionArduinoService {
  create(createConexionArduinoDto: CreateConexionArduinoDto) {
    return 'This action adds a new conexionArduino';
  }

  findAll() {
    return `This action returns all conexionArduino`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conexionArduino`;
  }

  update(id: number, updateConexionArduinoDto: UpdateConexionArduinoDto) {
    return `This action updates a #${id} conexionArduino`;
  }

  remove(id: number) {
    return `This action removes a #${id} conexionArduino`;
  }
}
