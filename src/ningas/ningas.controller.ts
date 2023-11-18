import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNingasDto } from './create-ninga.dto';

@Controller('ningas')
export class NingasController {
  @Get()
  // Get http://localhost:3001/ningas?type=fast
  getNingas(@Query('type') type: string) {
    return type == 'fast' ? 'Fast ningas' : 'Slow ningas';
  }

  @Get(':id')
  getNingasById(@Param('id') id: string) {
    return id;
  }

  @Post()
  createNingas(@Body() body: CreateNingasDto) {
    // console.log(body);
    return {
      name: body.name,
      email: body.email,
    };
  }

  @Put(':id')
  updateNingas() {
    return 'Update ningas';
  }

  @Delete(':id')
  deleteNingas() {
    return 'Delete ningas';
  }
}
