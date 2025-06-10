import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './services/notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Notes, NotesSchema } from './schema/notes.schema';

@Module({
     imports: [
          DatabaseModule,
          MongooseModule.forFeature([{ name: 'Notes', schema: NotesSchema }]),
     ],
     controllers: [NotesController],
     providers: [NotesService],
})
export class AppModule { }
