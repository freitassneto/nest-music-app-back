import { Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { MuscisRepository } from './repositories/music.repository';
import { PrismaService } from 'src/database/prisma.service';
import { MusicsPrismaRepository } from './repositories/prisma/musics-prisma.repository';

@Module({
  controllers: [MusicsController],
  providers: [
    MusicsService,
    PrismaService,
    {
      provide: MuscisRepository,
      useClass: MusicsPrismaRepository,
    },
  ],
})
export class MusicsModule {}
