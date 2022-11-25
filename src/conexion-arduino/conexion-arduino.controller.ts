import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConexionArduinoService } from './conexion-arduino.service';
import { CreateConexionArduinoDto } from './dto/create-conexion-arduino.dto';
import { UpdateConexionArduinoDto } from './dto/update-conexion-arduino.dto';
import { Response } from 'express';

@ApiTags('Conexion-Arduino')
@Controller('conexion-arduino')
export class ConexionArduinoController {
  constructor(
    private readonly conexionArduinoService: ConexionArduinoService,
  ) {}

  @Post()
  create(
    @Res() res: Response,
    @Body() createConexionArduinoDto: CreateConexionArduinoDto,
  ) {
    res.status(HttpStatus.CREATED).send();
    return this.conexionArduinoService.create(createConexionArduinoDto);
  }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return this.conexionArduinoService.findAll();
  }

  @Get(':userID')
  findOne(
    @Param('userID') userID: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.status(HttpStatus.OK);
    return this.conexionArduinoService.findOne(userID);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConexionArduinoDto: UpdateConexionArduinoDto,
  ) {
    return this.conexionArduinoService.update(+id, updateConexionArduinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conexionArduinoService.remove(+id);
  }
}
