import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotesDto } from '../dto/create-notes.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Notes, NotesDocument } from '../schema/notes.schema';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Notes.name) private notesModel: Model<NotesDocument>) { }
    private notes = [];

    async createNotes(note: Partial<Notes>): Promise<Notes> {
        const createdNote = new this.notesModel(note);
        return createdNote.save();
    }

    async findAllNotes(): Promise<Notes[]> {
        return this.notesModel.find().exec();
    }

    async updateNotes(id: ObjectId, createNotesDto: CreateNotesDto): Promise<Notes> {
        const existingNote = await this.notesModel.findByIdAndUpdate(id, createNotesDto, { new: true });
        if (!existingNote) {
            throw new NotFoundException(`Note #${id} not found`);
        }
        return existingNote;
    }

    async deleteStudent(id: ObjectId): Promise<Notes> {
        const deletedNote = await this.notesModel.findByIdAndDelete(id);
        if (!deletedNote) {
            throw new NotFoundException(`Note #${id} not found`);
        }
        return deletedNote;
    }
}