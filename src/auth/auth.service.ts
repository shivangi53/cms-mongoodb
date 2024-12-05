import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';
import { JwtPayload } from './jwt/jwt.payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // inject a model in constructor
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService
  ) {}

  // register a new User
  async registerUser(user: User): Promise<string> {
   

    try {
      var checkuser = await this.userModel.findOne({ email: user.email });
      if (checkuser) {
        return 'User already exist';
      } else {
        console.log(user);
        
        const res = await this.userModel.create(user);
        return 'User created successfully';
      }
    } catch (err) {
      return err.message;
    }
  }

  // validate the user creditional

  async validateUser(email: string, password: string): Promise<String> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return 'User Not Found';
    } else {
      if (user.password == password) {
        //  genrate the token based in Payload
        const payload: JwtPayload = { email: user.email, role: user.role };
        const accessToken= this.jwtService.sign(payload);
        return accessToken;

       // return "sucess login";
      } else {
        return 'Invalid Password';
      }
    }
  }
}
