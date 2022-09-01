import { IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsString()
    name: String;
    @IsString()
    sex: String;
    @IsNumber()
    age: Number;
    @IsString()
    phone: String;
    @IsString()
    refundAccount: String;
}