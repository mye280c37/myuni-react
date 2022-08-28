import { IsNumber, IsString } from "class-validator";
import { DesiredUni } from "src/desired-uni/desired-uni.schema";
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
    @IsString()
    consultingOption: String;
    @IsString()
    applicationType: String;
    @IsString()
    reason: String;
    @IsString()
    date: String;
    score: Score;
    uniInfo: DesiredUni;
    @IsString()
    reference: String;
    additionalInfo: Object;
    routeKnown: Array<String>;
    @IsString()
    refundAccount: String;
  }