import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

//data transfer object
export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do Usuário',
    type: String,
    default: 'User',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email do Usuário',
    type: String,
    default: 'user@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Senha do Usuário',
    type: String,
    default: 'password',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
