import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId, SchemaTypes, Types} from 'mongoose';
import { User } from 'src/user/user.schema';

export type ConsultingRequestDocument = ConsultingRequest & Document;

@Schema()
export class ConsultingRequest {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
    @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'User' })
    user: User;
    reference: String;
    additionalInfo: String;
    routeKnown: String;
}

export const ConsultingRequestSchema = SchemaFactory.createForClass(ConsultingRequest);