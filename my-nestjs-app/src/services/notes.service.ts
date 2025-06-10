    import { Injectable } from '@nestjs/common';
    import { CreateNotesDto } from '../dto/create-notes.dto';

    @Injectable()
    export class NotesService {
      private notes = [];

      create(createNotesDto: CreateNotesDto) {
        this.notes.push(createNotesDto);
        return createNotesDto;
      }

      findAll() {
        return this.notes;
      }
    }