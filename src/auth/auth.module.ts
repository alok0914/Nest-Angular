   import { Module } from '@nestjs/common';
   import { JwtModule } from '@nestjs/jwt';
   import { AuthService } from '../services/auth.service';
   import { JwtStrategy } from './jwt.strategy';
   import { jwtConstants } from './constants';

   @Module({
     imports: [
       JwtModule.register({
         global: true,
         secret: jwtConstants.secret,
         signOptions: { expiresIn: '2h' },
       }),
     ],
     providers: [AuthService, JwtStrategy],
     exports: [AuthService],
   })
   export class AuthModule {}