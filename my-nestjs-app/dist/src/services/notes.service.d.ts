import { CreateNotesDto } from '../dto/create-notes.dto';
export declare class NotesService {
    private notes;
    create(createNotesDto: CreateNotesDto): CreateNotesDto;
    findAll(): any[];
}
