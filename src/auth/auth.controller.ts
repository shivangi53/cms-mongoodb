import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDTO } from './dto/user.register.dto';
import { User, UserRole } from './schema/user.schema';
import { v4 as uuidv4 } from 'uuid';
import { UserLoginDTO } from './dto/user.login.dto';

@Controller('auth')
export class AuthController {
    // include the service
    constructor( private authService: AuthService) {}

    //  register a new User
   @Post('register')
    async registerUser(@Body()  userDetails:UserRegisterDTO):Promise<string> {
     console.log(userDetails);
        const user:User = {
            id: uuidv4(),
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            role: UserRole.USER
        }
      console.log(user);
        
        const res = await this.authService.registerUser(user);
        return res;
    }

    @Post('login')
    async loginUser(@Body()  userDetails:UserLoginDTO):Promise<String> {
        const res = await this.authService.validateUser(userDetails.email, userDetails.password);
        return res;
    }
}
