import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DesiredUni } from 'src/desired-uni/desired-uni.schema';
import { Score } from 'src/score/score.schema';
import { User } from 'src/user/user.schema';
import { ConsultingRequestDto } from './dto/consulting-request.dto';
import { ConsultingRequest } from './consulting-request.schema';

@Injectable()
export class ConsultingRequestService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        @InjectModel('Score') private readonly scoreModel: Model<Score>,
        @InjectModel('DesiredUni') private readonly uniModel: Model<DesiredUni>,
        @InjectModel('ConsultingRequest') private readonly consultingRequestModel: Model<ConsultingRequest>
    ){}

    async create(consultingRequestDto: ConsultingRequestDto): Promise<ConsultingRequest>{
        const { name, sex, age, phone, consultingOption, applicationType, reason, desiredDate, score, uniInfo, reference, additionalInfo, routeKnown, refundAccount } = consultingRequestDto;
        const newUser = await new this.userModel({
            name,
            sex,
            age,
            phone,
            refundAccount
        }).save();
        const userScore = await new this.scoreModel({
            user: newUser,
            ...score
        }).save();
        const  userDesiredUni = await new this.uniModel({
            user: newUser,
            ... uniInfo
        }).save();
        return await new this.consultingRequestModel({
            user: newUser,
            score: userScore,
            uni: userDesiredUni,
            desiredDate: desiredDate,
            consultingOption: consultingOption,
            applicationType: applicationType,
            reason: reason,
            reference: reference,
            additionalInfo: additionalInfo,
            routeKnown: routeKnown

        }).save();
    }
    
    async update(requestId: string, requestDto: ConsultingRequestDto): Promise<ConsultingRequest> {
        const existingRequest = await this.consultingRequestModel.findByIdAndUpdate(requestId, requestDto, { new: true });
        if (!existingRequest) {
            throw new NotFoundException(`Score #${requestId} not found`);
        }
        return existingRequest;
    }

    async getAll(): Promise<ConsultingRequest[]> {
        const requests = await this.consultingRequestModel.find();
        if (!requests || requests.length == 0) {
            throw new NotFoundException('Consulting Requests data not found!');
        }
        return requests;
    }

    async get(requestId: string): Promise<ConsultingRequest> {
        const existingRequest = await this.consultingRequestModel.findById(requestId).exec();
        if (!existingRequest) {
            throw new NotFoundException(`Score #${requestId} not found`);
        }
        const relatedScore = await this.scoreModel.findById(existingRequest.score).exec();
        const relatedUni = await this.uniModel.findById(existingRequest.uni).exec();
        return existingRequest;
    }

    async getByUser(userId: string): Promise<ConsultingRequest[]> {
        const existingRequest = await this.consultingRequestModel.find({user: new Types.ObjectId(userId)}).exec();
        if (!existingRequest) {
            throw new NotFoundException(`Consulting Request in #${userId} not found`);
        }
        return existingRequest;
    }

    async delete(requestId: string): Promise<ConsultingRequest> {
        const deletedRequest = await this.consultingRequestModel.findByIdAndDelete(requestId);
        if (!deletedRequest) {
            throw new NotFoundException(`Consulting Request #${requestId} not found`);
        }   
        return deletedRequest;
    }

    async deleteByUser(userId: string): Promise<void>{
        await this.scoreModel.deleteMany({user: new Types.ObjectId(userId)});
    }
}
