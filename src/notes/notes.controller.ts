import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateNotesDto } from '../dto/create-notes.dto';
import { NotesService } from 'src/services/notes.service';

@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService) { }

    @Get()
    async getAllNotes(@Res() response) {
        try {
            const notesData = await this.notesService.findAllNotes();
            return response.status(HttpStatus.OK).json({
                message: 'All notes data found successfully', notesData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Post()
    async createNote(@Res() response, @Body() createNotesDto: CreateNotesDto) {
        try {
            const newNote = await this.notesService.createNotes(createNotesDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Note has been created successfully',
                newNote,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Notes not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateNote(@Res() response, @Param('id') id: ObjectId,
        @Body() createNotesDto: CreateNotesDto) {
        try {
            const existingNote = await this.notesService.updateNotes(id, createNotesDto);
            return response.status(HttpStatus.OK).json({
                message: 'Note has been successfully updated',
                existingNote,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get(':id')
    findParticularNote(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} note`;
    }

    @Delete('/:id')
    async deleteNote(@Res() response, @Param('id') id: ObjectId) {
        try {
            const deletedNote = await this.notesService.deleteNote(id);
            return response.status(HttpStatus.OK).json({
                message: 'Note deleted successfully',
                deletedNote,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}