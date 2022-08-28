import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, SchemaTypes, Types} from 'mongoose';
import { User } from 'src/user/user.schema';

export type DesiredUniDocument = DesiredUni & Document;

const uniItem = {
    university: { type: String },
    subject: { type: String },
    priority: { type: Number }
};

@Schema()
export class DesiredUni {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
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
}

export const DesiredUnichema = SchemaFactory.createForClass(DesiredUni);