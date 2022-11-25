import { ApiProperty } from '@nestjs/swagger';

export class CreateConexionArduinoDto {
  @ApiProperty()
  userID: string;
  @ApiProperty()
  userNombre: string;
}
