import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScoreModule } from './score/score.module';
import { ConsultingModule } from './consulting/consulting.module';
import { CheckboxFormModule } from './checkbox-form/checkbox-form.module';
import { ConsultingRequestModule } from './consulting-request/consulting-request.module';
import { ConfigModule } from '@nestjs/config';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }), 
    UserModule,
    ScoreModule,
    ConsultingModule, 
    CheckboxFormModule,
    ConsultingRequestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev);
  }
}
