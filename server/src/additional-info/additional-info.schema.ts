import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId, SchemaTypes, Types} from 'mongoose';

export type AdditionalInfoDocument = AdditionalInfo & Document;

@Schema()
export class AdditionalInfo {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
    @Prop({ required: true })
    labels: Types.Array<String>;
    @Prop({ required: true })
    haveEtc: Boolean;
    
}

export const AdditionalInfoSchema = SchemaFactory.createForClass(AdditionalInfo);