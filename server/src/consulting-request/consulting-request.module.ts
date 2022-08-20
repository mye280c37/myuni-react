import { Module } from '@nestjs/common';
import { ConsultingRequestController } from './consulting-request.controller';
import { ConsultingRequestService } from './consulting-request.service';

@Module({
  controllers: [ConsultingRequestController],
  providers: [ConsultingRequestService]
})
export class ConsultingRequestModule {}
