import { BadRequestException, Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { MuscisRepository } from './repositories/music.repository';
import { PrismaService } from 'src/database/prisma.service';
import { MusicsPrismaRepository } from './repositories/prisma/musics-prisma.repository';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, callback) => {
          callback(null, file.originalname);
        },
      }),
      fileFilter: (_, file, callback) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'audio/mpeg') {
          callback(null, true);
        } else {
          callback(
            new BadRequestException('Only jpeg or mp3 format allowed'),
            false,
          );
        }
      },
    }),
  ],
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
