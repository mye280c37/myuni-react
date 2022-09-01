import { IsNumber, IsString } from "class-validator";

export class AvailableDateDto {
    @IsString()
    date: String;
    @IsString()
    timeFrom: String;
    @IsNumber()
    timeTo: Number;
}