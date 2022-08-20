import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ConsultingRequestDto } from './consulting-request.dto';
import { ConsultingRequest } from './consulting-request.schema';
import { ConsultingRequestService } from './consulting-request.service';

@Controller('consulting-request')
export class ConsultingRequestController {
    constructor(private readonly consultingRequestService: ConsultingRequestService) {}

    @Post()
    async createConsultingRequest(@Body() consultingRequestDto: ConsultingRequestDto): Promise<String>{
        const generatedId = await this.consultingRequestService.create(consultingRequestDto);
        return generatedId;
    }

    @Get()
    async getAll(): Promise<ConsultingRequest[]> {
        return await this.consultingRequestService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() consultingRequestDto: ConsultingRequestDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
