import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUsersDto } from '../dto/create-users.dto';
import { UsersService } from 'src/services/users.service';

@Controller('Users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUsers(@Res() response, @Body() createUsersDto: CreateUsersDto) {
        try {
            const newUser = await this.usersService.createUsers(createUsersDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'User has been created successfully',
                newUser,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Notes not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateUser(@Res() response, @Param('id') id: ObjectId,
        @Body() createUsersDto: CreateUsersDto) {
        try {
            const existingNote = await this.usersService.updateUser(id, createUsersDto);
            return response.status(HttpStatus.OK).json({
                message: 'Note has been successfully updated',
                existingNote,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}