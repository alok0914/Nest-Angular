import { CreateNotesDto } from '../dto/create-notes.dto';
import { Model, ObjectId } from 'mongoose';
import { Notes, NotesDocument } from '../schema/notes.schema';
export declare class NotesService {
    private notesModel;
    constructor(notesModel: Model<NotesDocument>);
    private notes;
    createNotes(note: Partial<Notes>): Promise<Notes>;
    findAllNotes(): Promise<Notes[]>;
    updateNotes(id: ObjectId, createNotesDto: CreateNotesDto): Promise<Notes>;
    deleteStudent(id: ObjectId): Promise<Notes>;
}
