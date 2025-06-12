import { Document } from 'mongoose';
export type UserDocument = Users & Document;
export declare class Users {
    name: string;
    phoneNumber: number;
    email: string;
    password: string;
}
export declare const UsersSchema: import("mongoose").Schema<Users, import("mongoose").Model<Users, any, any, any, Document<unknown, any, Users, any> & Users & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Users, Document<unknown, {}, import("mongoose").FlatRecord<Users>, {}> & import("mongoose").FlatRecord<Users> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
