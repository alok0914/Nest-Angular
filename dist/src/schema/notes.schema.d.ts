import { Document } from 'mongoose';
export type NotesDocument = Notes & Document;
export declare class Notes {
    name: string;
    content: string;
}
export declare const NotesSchema: import("mongoose").Schema<Notes, import("mongoose").Model<Notes, any, any, any, Document<unknown, any, Notes, any> & Notes & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Notes, Document<unknown, {}, import("mongoose").FlatRecord<Notes>, {}> & import("mongoose").FlatRecord<Notes> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
