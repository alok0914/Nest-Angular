import { ObjectId } from 'mongoose';
import { CreateNotesDto } from '../dto/create-notes.dto';
import { NotesService } from 'src/services/notes.service';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    getAllNotes(response: any): Promise<any>;
    createNote(response: any, createNotesDto: CreateNotesDto): Promise<any>;
    updateNote(response: any, id: ObjectId, createNotesDto: CreateNotesDto): Promise<any>;
    findParticularNote(params: any): string;
    deleteNote(response: any, id: ObjectId): Promise<any>;
}
