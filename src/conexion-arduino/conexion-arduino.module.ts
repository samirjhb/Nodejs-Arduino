import { Module } from '@nestjs/common';
import { ConexionArduinoService } from './conexion-arduino.service';
import { ConexionArduinoController } from './conexion-arduino.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConexionArduino } from './entities/conexion-arduino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConexionArduino])],
  controllers: [ConexionArduinoController],
  providers: [ConexionArduinoService],
  exports: [ConexionArduinoService],
})
export class ConexionArduinoModule {}
