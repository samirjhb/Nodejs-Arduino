import { Module } from '@nestjs/common';
import { ConexionArduinoService } from './conexion-arduino.service';
import { ConexionArduinoController } from './conexion-arduino.controller';

@Module({
  controllers: [ConexionArduinoController],
  providers: [ConexionArduinoService]
})
export class ConexionArduinoModule {}
