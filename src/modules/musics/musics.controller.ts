import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MusicsService } from './musics.service';
import { CreateMusicDTO } from './dto/create-music.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('musics')
@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createMusicDTO: CreateMusicDTO, @Request() req) {
    console.log(req.user);
    return this.musicsService.create(createMusicDTO, req.user.id);
  }

  @Get('')
  @ApiQuery({
    name: 'group',
    type: String,
    required: false,
    description: 'Informe artist, genre ou album para trazer um item agrupado',
  })
  findAll(@Query('group') group: string | undefined) {
    return this.musicsService.findAll(group);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicsService.findOne(id);
  }
}
