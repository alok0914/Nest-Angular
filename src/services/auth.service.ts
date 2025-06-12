import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async generateJwt(payload: any): Promise<string> {
        return this.jwtService.signAsync(payload);
    }

    async validateUser(username: string, password: string): Promise<any> {
        // Logic to validate user from db
        return { userId: 1, username: 'test' };
    }
}