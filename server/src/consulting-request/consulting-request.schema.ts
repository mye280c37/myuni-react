import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId} from 'mongoose';

export type ConsultingRequestDocument = ConsultingRequest & Document;

@Schema()
export class ConsultingRequest {
    @Prop()
    _id: ObjectId;
    @Prop({ required: true })
    name: String;
    @Prop({ required: true })
    sex: String;
    @Prop({ required: true })
    age: Number;
    @Prop({ required: true })
    phone: String;
    @Prop({ required: true })
    refundAccount: String;
}

export const ConsultingRequestSchema = SchemaFactory.createForClass(ConsultingRequest);