import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('notes')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all notes';
    }

    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'no-store')
    create(): string {
        return 'This action adds a new cat';
    }
}