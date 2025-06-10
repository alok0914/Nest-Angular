import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateNotesDto } from '../dto/create-notes.dto';
import { NotesService } from 'src/services/notes.service';

@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService) { }

    @Get()
    findAll(@Req() request: Request) { //@Query('age') age: number, @Query('breed'
        return this.notesService.findAll();
    }

    @Post()
    async createNote(@Body() createNotesDto: CreateNotesDto): Promise<any> {
        return this.notesService.create(createNotesDto);
    }

    @Get(':id')
    findParticularNote(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} note`;
    }

    @Delete(':id')
    deleteNote(@Param('id') id: string) {
        return `This action removes a #${id} note`;
    }
}