import { Module } from '@nestjs/common';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './services/notes.service';

@Module({
     controllers: [NotesController],
     providers: [NotesService],
})
export class AppModule {}
