import { Body, Controller, Post } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { CreateMusicDTO } from './dto/create-music.dto';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Post('')
  create(@Body() createMusicDTO: CreateMusicDTO) {
    return this.musicsService.create(createMusicDTO);
  }
}
