import { Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { MuscisRepository } from './repositories/music.repository';
import { MusicsInMemoryRepository } from './repositories/in-memory/musics.in-memory.repository';

@Module({
  controllers: [MusicsController],
  providers: [
    MusicsService,
    {
      provide: MuscisRepository,
      useClass: MusicsInMemoryRepository,
    },
  ],
})
export class MusicsModule {}
