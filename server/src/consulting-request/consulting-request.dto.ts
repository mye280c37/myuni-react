import { IsNumber, IsString } from "class-validator";
import { Score } from "src/score/score.schema";

export class ConsultingRequestDto {
    @IsString()
    name: String;
    @IsString()
    sex: String;
    @IsNumber()
    age: Number;
    @IsString()
    phone: String;
    consulting: Object;
    score: Score;
    uniInfo: Object;
    @IsString()
    reference: String;
    additionalInfo: Object;
    routeKnown: Object;
    @IsString()
    refundAccount: String;
  }