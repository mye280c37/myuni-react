import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Score, ScoreSchema } from './score.schema';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { User, UserSchema } from 'src/user/user.schema';

@Module({
    imports: [ MongooseModule.forFeature([
        {name: Score.name, schema: ScoreSchema},
        {name: User.name, schema: UserSchema},
    ]) ],
    exports: [ MongooseModule ],
    providers: [ScoreService],
    controllers: [ScoreController]
})
export class ScoreModule {}
