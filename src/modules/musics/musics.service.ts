import { Injectable } from '@nestjs/common';
import { CreateMusicDTO } from './dto/create-music.dto';

@Injectable()
export class MusicsService {
  create(data: CreateMusicDTO) {
    return data;
  }
}
