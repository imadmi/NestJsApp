import { Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';

@Controller('ningas')
export class NingasController {

    @Get()
    // Get http://localhost:3001/ningas?type=fast
    getNingas(@Query('type') type: string) {
        return type=='fast' ? 'Fast ningas' : 'Slow ningas';
    }

    @Get(':id')
    getNingasById(@Param('id') id: string) {
        return id;
    }

    @Post()
    createNingas() {
        return 'Create ningas';
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
