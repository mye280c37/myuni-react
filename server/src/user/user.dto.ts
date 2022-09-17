import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @ApiProperty({example: '아무개'})
    name: String;
    @IsString()
    @ApiProperty({example: 'm'})
    sex: String;
    @IsNumber()
    @ApiProperty({example: '19'})
    age: Number;
    @IsString()
    @ApiProperty({example: '01011112222'})
    phone: String;
    @IsString()
    @ApiProperty({example: '1002-987-123456 00은행 아무개'})
    refundAccount: String;
}