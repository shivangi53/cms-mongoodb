import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../schema/user.schema';
import mongoose from 'mongoose';
import { JwtPayload } from './jwt.payload.interface';

// verify the token
export class JWtStrategy extends PassportStrategy(Strategy) {

  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {
    super(
        {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: 'course#$123$ecret',
        }
    );
  }

  /// validate Method
  async validate(payload: JwtPayload) {
       
    console.log(payload);
    
    const { email, role} = payload;
    const user = await this.userModel.findOne(
        {
          email,
          role
        }
    );
    console.log(user);
    
      if(!user){
        throw new Error('User not found');    
      }
    return user;
  }
}