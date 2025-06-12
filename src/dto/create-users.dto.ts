import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateUsersDto {
    @IsString({ message: 'Name is required' })
    @MaxLength(30)
    @IsNotEmpty()
    name: string;

    @IsNumber({}, { message: 'Phone Number is required' })
    @MaxLength(10)
    @IsNotEmpty()
    phoneNumber: number;

    @IsEmail({}, { message: 'Invalid email format' })
    @MaxLength(10)
    @IsNotEmpty()
    email: string;

    @IsString({ message: 'Password is required' })
    @MaxLength(30)
    @IsNotEmpty()
    password: string;
}