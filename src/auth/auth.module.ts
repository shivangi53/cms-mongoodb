import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWtStrategy } from './jwt/jwt.stratagy';

@Module({
  imports: [
    //  use passport for authentication
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'course#$123$ecret',
      signOptions: {
        expiresIn: 3600
      }
    }),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService, JWtStrategy],
  exports:[PassportModule, JwtModule, JWtStrategy]
})
export class AuthModule {}