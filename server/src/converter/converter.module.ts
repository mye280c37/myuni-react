import { Module } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { ScoreConversionService } from './score-conversion.service';
import { ConverterController } from './converter.controller';

@Module({
  providers: [ConverterService, ScoreConversionService],
  controllers: [ConverterController]
})
export class ScoreConversionModule {}
