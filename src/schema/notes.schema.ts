
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotesDocument = Notes & Document;

@Schema({ collection: 'Notes' })
export class Notes {
  @Prop()
  name: string;

  @Prop()
  content: string;
}

export const NotesSchema = SchemaFactory.createForClass(Notes);