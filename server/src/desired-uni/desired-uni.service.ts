import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, ObjectId } from 'mongoose';
import { User } from 'src/user/user.schema';
import { DesiredUniDto } from './desired-uni.dto';
import { DesiredUni } from './desired-uni.schema';


@Injectable()
export class DesiredUniService {
    constructor(
        @InjectModel('DesiredUni') private readonly uniModel: Model<DesiredUni>,
        @InjectModel('User') private readonly userModel: Model<User>
    ){}

    async create(uniDto: DesiredUniDto): Promise<DesiredUni> {
        const existingUser = await this.userModel.findById(uniDto.user).exec();
        if (!existingUser) {
            throw new NotFoundException(`AvailableDate #${uniDto.user} not found`);
        }
        return await new this.uniModel({
            user: existingUser,
            1: uniDto[1],
            2: uniDto[2],
            3: uniDto[3],
            4: uniDto[4],
            5: uniDto[5],
            6: uniDto[6],
            reason: uniDto.reason
        }).save();
    }

    async update(uniId: string, uniDto: DesiredUniDto): Promise<DesiredUni> {
        const existingUni = await this.uniModel.findByIdAndUpdate(uniId, uniDto, { new: true });
        if (!existingUni) {
            throw new NotFoundException(`Unisversity Data #${uniId} not found`);
        }
        return existingUni;
    }

    async getAll(): Promise<DesiredUni[]> {
        const unis = await this.uniModel.find();
        if (!unis || unis.length == 0) {
            throw new NotFoundException('Universities data not found!');
        }
        return unis;
    }

    async get(uniId: string): Promise<DesiredUni> {
        const existingUni = await this.uniModel.findById(uniId).exec();
        if (!existingUni) {
            throw new NotFoundException(`University #${uniId} not found`);
        }
        return existingUni;
    }

    async getByUser(userId: string): Promise<DesiredUni[]> {
        const existingUni = await this.uniModel.find({user: new Types.ObjectId(userId)}).exec();
        if (!existingUni) {
            throw new NotFoundException(`University in #${userId} not found`);
        }
        return existingUni;
    }

    async delete(uniId: string): Promise<DesiredUni> {
        const deletedScore = await this.uniModel.findByIdAndDelete(uniId);
        if (!deletedScore) {
            throw new NotFoundException(`University #${uniId} not found`);
        }   
        return deletedScore;
    }

    async deleteByUser(userId: string): Promise<void>{
        await this.uniModel.deleteMany({user: new Types.ObjectId(userId)});
    }

}
