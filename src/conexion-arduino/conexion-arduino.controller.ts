import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConexionArduinoService } from './conexion-arduino.service';
import { CreateConexionArduinoDto } from './dto/create-conexion-arduino.dto';
import { UpdateConexionArduinoDto } from './dto/update-conexion-arduino.dto';

@Controller('conexion-arduino')
export class ConexionArduinoController {
  constructor(private readonly conexionArduinoService: ConexionArduinoService) {}

  @Post()
  create(@Body() createConexionArduinoDto: CreateConexionArduinoDto) {
    return this.conexionArduinoService.create(createConexionArduinoDto);
  }

  @Get()
  findAll() {
    return this.conexionArduinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conexionArduinoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConexionArduinoDto: UpdateConexionArduinoDto) {
    return this.conexionArduinoService.update(+id, updateConexionArduinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conexionArduinoService.remove(+id);
  }
}
