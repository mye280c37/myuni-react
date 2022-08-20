import { Body, Controller, Post } from '@nestjs/common';
import { ConsultingRequestDto } from './consulting-request.dto';
import { ConsultingRequestService } from './consulting-request.service';

@Controller('consulting-request')
export class ConsultingRequestController {
    constructor(private readonly consultingRequestService: ConsultingRequestService) {}

    @Post()
    async createConsultingRequest(@Body() consultingRequestDto: ConsultingRequestDto): Promise<String>{
        const generatedId = await this.consultingRequestService.create(consultingRequestDto);
        return generatedId;
    }
}
