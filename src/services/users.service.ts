import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersDto } from '../dto/create-users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Users, UserDocument } from '../schema/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<UserDocument>) { }

    async createUsers(user: Partial<Users>): Promise<Users> {
        const createdUser = new this.usersModel(user);
        return createdUser.save();
    }

    async updateUser(id: ObjectId, createUsersDto: CreateUsersDto): Promise<Users> {
        const existingUser = await this.usersModel.findByIdAndUpdate(id, createUsersDto, { new: true });
        if (!existingUser) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return existingUser;
    }

}