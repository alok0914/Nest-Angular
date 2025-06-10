import { Request } from 'express';
import { CreateNotesDto } from '../dto/create-notes.dto';
import { NotesService } from 'src/services/notes.service';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    findAll(request: Request): any[];
    createNote(createNotesDto: CreateNotesDto): Promise<any>;
    findParticularNote(params: any): string;
    deleteNote(id: string): string;
}
