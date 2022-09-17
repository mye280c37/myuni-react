import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId, SchemaTypes, Types} from 'mongoose';
import { DesiredUni } from 'src/desired-uni/desired-uni.schema';
import { Score } from 'src/score/score.schema';
import { User } from 'src/user/user.schema';
import { AdditionalInfoForm } from './dto/additional-info-form.dto';

export type ConsultingRequestDocument = ConsultingRequest & Document;

@Schema()
export class ConsultingRequest {
    @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'User' })
    user: User;
    @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'Score' })
    score: Score;
    @Prop({ type: SchemaTypes.ObjectId, required: true, ref: 'DesiredUni' })
    uni: DesiredUni;
    @Prop({required: true})
    desiredDate: String;
    @Prop({required: true})
    consultingOption: Array<String>;
    @Prop({required: true})
    applicationType: Array<String>;
    @Prop({required: true})
    reason: String;
    @Prop({required: true})
    reference: String;
    @Prop({required: true})
    additionalInfo: AdditionalInfoForm;
    @Prop({required: true})
    routeKnown: Array<String>;
}

export const ConsultingRequestSchema = SchemaFactory.createForClass(ConsultingRequest);