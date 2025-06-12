import { CreateUsersDto } from '../dto/create-users.dto';
import { Model, ObjectId } from 'mongoose';
import { Users, UserDocument } from '../schema/user.schema';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: Model<UserDocument>);
    createUsers(user: Partial<Users>): Promise<Users>;
    updateUser(id: ObjectId, createUsersDto: CreateUsersDto): Promise<Users>;
}
