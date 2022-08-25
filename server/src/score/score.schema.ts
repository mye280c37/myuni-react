import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId, SchemaTypes, Types} from 'mongoose';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
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
    optional: Number;
    @Prop({ required: true })
    average: Number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);