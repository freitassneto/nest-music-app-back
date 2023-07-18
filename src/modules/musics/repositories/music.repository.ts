/* eslint-disable prettier/prettier */
import { CreateMusicDTO } from '../dto/create-music.dto';
import { Music } from '../entities/music.entity';

export abstract class MuscisRepository {
  abstract create(data: CreateMusicDTO): Promise<Music>;
  abstract findOne(id: string): Promise<Music | undefined>;
  abstract findAll(group: string | undefined): Promise<Music[] | object>;
}
