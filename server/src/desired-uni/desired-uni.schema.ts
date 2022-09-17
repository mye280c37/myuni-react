import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, SchemaTypes, Types} from 'mongoose';
import { User } from 'src/user/user.schema';

export type DesiredUniDocument = DesiredUni & Document;

export const uniItem = {
    university: { type: String },
    major: { type: String }
};

@Schema({versionKey: false})
export class DesiredUni {
    @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'User' })
    user: User;
    @Prop(raw(uniItem))
    1: Record<string, any>;
    @Prop(raw(uniItem))
    2: Record<string, any>;
    @Prop(raw(uniItem))
    3: Record<string, any>;
    @Prop(raw(uniItem))
    4: Record<string, any>;
    @Prop(raw(uniItem))
    5: Record<string, any>;
    @Prop(raw(uniItem))
    6: Record<string, any>;
    @Prop({required: true})
    reason: String;
}

export const DesiredUniSchema = SchemaFactory.createForClass(DesiredUni);