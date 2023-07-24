import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDTO } from './dto/create-music.dto';
import { MuscisRepository } from './repositories/music.repository';

@Injectable()
export class MusicsService {
  constructor(private musicRepository: MuscisRepository) {}
  async create(createMusicDTO: CreateMusicDTO, userId: string) {
    const music = await this.musicRepository.create(createMusicDTO, userId);
    return music;
  }

  async findAll(group: string | undefined) {
    return this.musicRepository.findAll(group);
  }

  async findOne(id: string) {
    const findMusic = await this.musicRepository.findOne(id);
    if (!findMusic) {
      throw new NotFoundException('Music not found');
    }
    return findMusic;
  }
}
