/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMusicDTO {
  @ApiProperty({
    description: 'Nome da música',
    type: String,
    default: 'Music',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Nome do álbum',
    type: String,
    default: 'Album',
  })
  @IsString()
  @IsNotEmpty()
  album: string;

  @ApiProperty({
    description: 'Nome do artista',
    type: String,
    default: 'Artist',
  })
  @IsString()
  @IsNotEmpty()
  artist: string;

  @ApiProperty({
    description: 'Gênero da música',
    type: String,
    default: 'Genre',
  })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({
    description: 'Ano de lançamento da música',
    type: String,
    default: '1990',
  })
  @IsString()
  @IsNotEmpty()
  year: string;

  @ApiProperty({
    description: 'Link da imagem de capa da música',
    type: String,
    default: 'http://music.cover-image.url/',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cover_image: string | null;

  @ApiProperty({
    description: 'Link da música',
    type: String,
    default: 'http://music.url/',
  })
  @IsString()
  @IsNotEmpty()
  music_url: string | null;
}
