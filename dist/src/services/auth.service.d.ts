import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateJwt(payload: any): Promise<string>;
    validateUser(username: string, password: string): Promise<any>;
}
