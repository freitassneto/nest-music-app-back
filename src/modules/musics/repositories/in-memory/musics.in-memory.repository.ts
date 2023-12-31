/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { MuscisRepository } from '../music.repository';
import { CreateMusicDTO } from '../../dto/create-music.dto';
import { Music } from '../../entities/music.entity';
import { UpdateMusicDto } from '../../dto/update-music.dto';

@Injectable()
export class MusicsInMemoryRepository implements MuscisRepository {
  update(data: UpdateMusicDto, musicId: string): Promise<Music> {
    throw new Error('Method not implemented.');
  }
  private database: Music[] = [];
  async create(data: CreateMusicDTO, userId: string): Promise<Music> {
    const newMusic = new Music();
    Object.assign(newMusic, {
      ...data,
      userId: userId,
      cover_image: data.cover_image || null,
      music_url: data.music_url || null,
    });

    this.database.push(newMusic);

    return newMusic;
  }
  async findOne(id: string): Promise<Music> {
    const music = this.database.find((music) => music.id === id);
    return music;
  }

  private groupBy(musics: Music[], key: string) {
    return musics.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }

  async findAll(group: string): Promise<object | Music[]> {
    if (group) {
      return this.groupBy(this.database, group);
    }
    return this.database;
  }
}
