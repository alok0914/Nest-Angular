import { ObjectId } from 'mongoose';
import { CreateUsersDto } from '../dto/create-users.dto';
import { UsersService } from 'src/services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUsers(response: any, createUsersDto: CreateUsersDto): Promise<any>;
    updateUser(response: any, id: ObjectId, createUsersDto: CreateUsersDto): Promise<any>;
}
