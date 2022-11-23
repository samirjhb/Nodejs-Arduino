import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConexionArduinoModule } from './conexion-arduino/conexion-arduino.module';

@Module({
  imports: [ConexionArduinoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
