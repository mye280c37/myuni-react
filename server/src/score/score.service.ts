import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, ObjectId } from 'mongoose';
import { User } from 'src/user/user.schema';
import { ScoreDto } from './score.dto';
import { Score } from './score.schema';

@Injectable()
export class ScoreService {
    constructor(
        @InjectModel('Score') private readonly scoreModel: Model<Score>,
        @InjectModel('User') private readonly userModel: Model<User>
    ){}

    async create(scoreDto: ScoreDto): Promise<Score> {
        const existingUser = await this.userModel.findById(scoreDto.user).exec();
        if (!existingUser) {
            throw new NotFoundException(`AvailableDate #${scoreDto.user} not found`);
        }
        return await new this.scoreModel({
            user: existingUser,
            korean: scoreDto.korean,
            english: scoreDto.english,
            math: scoreDto.math,
            society: scoreDto.society,
            science: scoreDto.science,
            history: scoreDto.history,
            optional: scoreDto.optional,
            average: scoreDto.average
        }).save();
    }

    async update(scoreId: string, scoreDto: ScoreDto): Promise<Score> {
        const existingScore = await this.scoreModel.findByIdAndUpdate(scoreId, scoreDto, { new: true });
        if (!existingScore) {
            throw new NotFoundException(`Score #${scoreId} not found`);
        }
        return existingScore;
    }

    async getAll(): Promise<Score[]> {
        const scores = await this.scoreModel.find();
        if (!scores || scores.length == 0) {
            throw new NotFoundException('Scores data not found!');
        }
        return scores;
    }

    async get(scoreId: string): Promise<Score> {
        const existingScore = await this.scoreModel.findById(scoreId).exec();
        if (!existingScore) {
            throw new NotFoundException(`Score #${scoreId} not found`);
        }
        return existingScore;
    }

    async getByUser(userId: string): Promise<Score[]> {
        const existingScore = await this.scoreModel.find({user: new Types.ObjectId(userId)}).exec();
        if (!existingScore) {
            throw new NotFoundException(`Score in #${userId} not found`);
        }
        return existingScore;
    }

    async delete(scoreId: string): Promise<Score> {
        const deletedScore = await this.scoreModel.findByIdAndDelete(scoreId);
        if (!deletedScore) {
            throw new NotFoundException(`Score #${scoreId} not found`);
        }   
        return deletedScore;
    }

    async deleteByUser(userId: string): Promise<void>{
        await this.scoreModel.deleteMany({user: new Types.ObjectId(userId)});
    }

}
