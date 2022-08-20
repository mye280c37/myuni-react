import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScoreModule } from './score/score.module';
import { ConsultingModule } from './consulting/consulting.module';
import { CheckboxformModule } from './checkboxform/checkboxform.module';
import { ConsultingFormModule } from './consulting-form/consulting-form.module';
import { CheckboxFormModule } from './checkbox-form/checkbox-form.module';
import { ConsultingRequestModule } from './consulting-request/consulting-request.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/tmp'), UserModule, ScoreModule, ConsultingModule, CheckboxformModule, ConsultingFormModule, CheckboxFormModule, ConsultingRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
