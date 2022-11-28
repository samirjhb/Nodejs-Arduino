import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  userID: string;
  @ApiProperty()
  userNombre: string;
}
