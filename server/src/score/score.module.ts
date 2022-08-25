import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Score, ScoreSchema } from './score.schema';

@Module({
    imports: [ MongooseModule.forFeature([{name: Score.name, schema: ScoreSchema}]) ],
    exports: [ MongooseModule ]
})
export class ScoreModule {}
