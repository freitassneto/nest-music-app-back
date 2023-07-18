import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

//data transfer object
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
