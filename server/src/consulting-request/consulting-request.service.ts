import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Score } from 'src/score/score.schema';
import { User } from 'src/user/user.schema';
import { ConsultingRequestDto } from './consulting-request.dto';
import { ConsultingRequest } from './consulting-request.schema';

@Injectable()
export class ConsultingRequestService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        @InjectModel('Score') private readonly scoreModel: Model<Score>,
        @InjectModel('ConsultingRequest') private readonly consultingRequestModel: Model<ConsultingRequest>
    ){}

    async create(consultingRequestDto: ConsultingRequestDto): Promise<String>{
        const { name, sex, age, phone, consulting, score, uniInfo, reference, additionalInfo, routeKnown, refundAccount } = consultingRequestDto;
        new this.userModel({
            name,
            sex,
            age,
            phone,
            refundAccount
        }).save();
        new this.scoreModel({score}).save();
        return 'ok';
    }
    
    async getAll(): Promise<ConsultingRequest[]> {ConsultingRequest
        return await this.consultingRequestModel.find().exec();
    }
}
