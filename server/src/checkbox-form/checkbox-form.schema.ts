import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId} from 'mongoose';

export type CheckBoxFormDocument = CheckBoxForm & Document;

@Schema()
export class CheckBoxForm {
    @Prop()
    _id: ObjectId;
    @Prop({ required: true })
    labels: Array<String>;
    @Prop({ required: true })
    haveEtc: Boolean;
    
}

export const CheckBoxFormSchema = SchemaFactory.createForClass(CheckBoxForm);