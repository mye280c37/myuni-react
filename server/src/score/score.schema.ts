import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, SchemaTypes, Types} from 'mongoose';
import { User } from 'src/user/user.schema';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
    @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'User' })
    user: User;
    @Prop({ required: true })
    korean: Number;
    @Prop({ required: true })
    english: Number;
    @Prop({ required: true })
    math: Number;
    @Prop({ required: true })
    society: Number;
    @Prop({ required: true })
    science: Number;
    @Prop({ required: true })
    history: Number;
    @Prop({ required: true })
    optional: Number;
    @Prop({ required: true })
    average: Number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);