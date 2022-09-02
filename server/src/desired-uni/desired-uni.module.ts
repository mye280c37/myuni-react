import { Module } from '@nestjs/common';
import { DesiredUniService } from './desired-uni.service';
import { DesiredUniController } from './desired-uni.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DesiredUni, DesiredUnichema } from './desired-uni.schema';
import { User, UserSchema } from 'src/user/user.schema';

@Module({
  imports: [ MongooseModule.forFeature([
    {name: DesiredUni.name, schema: DesiredUnichema},
    {name: User.name, schema: UserSchema},
]) ],
  providers: [DesiredUniService],
  controllers: [DesiredUniController]
})
export class DesiredUniModule {}
