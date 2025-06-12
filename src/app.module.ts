import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './services/notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesSchema } from './schema/notes.schema';
import { AuthModule } from './auth/auth.module';

@Module({
     imports: [
          DatabaseModule,
          MongooseModule.forFeature([{ name: 'Notes', schema: NotesSchema }]),
          AuthModule,
     ],
     controllers: [NotesController],
     providers: [NotesService],
})
export class AppModule { }
