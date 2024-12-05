import { IsEmail, IsString, Matches } from "class-validator";


export class UserLoginDTO {
    @IsEmail()
    email: string;
    //@IsStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    password: string;
}