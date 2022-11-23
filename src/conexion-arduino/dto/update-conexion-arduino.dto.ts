import { PartialType } from '@nestjs/mapped-types';
import { CreateConexionArduinoDto } from './create-conexion-arduino.dto';

export class UpdateConexionArduinoDto extends PartialType(CreateConexionArduinoDto) {}
