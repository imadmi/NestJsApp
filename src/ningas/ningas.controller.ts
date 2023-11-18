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
import { NingasService } from './ningas.service';

@Controller('ningas')
export class NingasController {
  constructor(private readonly ningasService: NingasService) {}

  @Get()
  // Get http://localhost:3001/ningas?name=Naruto
  getNingas(@Query('name') name: string) {
    return name
      ? this.ningasService.findOne(name)
      : this.ningasService.findAll();
  }

  @Get(':id')
  getNingasById(@Param('id') id: string) {
    return id;
    // try 
    // {
    //     throw new Error('Method not implemented.');
    // }
    // catch (error) 
    // {
    //     return error.message;
    // }
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
