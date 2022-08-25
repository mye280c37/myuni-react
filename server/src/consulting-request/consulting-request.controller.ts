import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiAcceptedResponse, ApiCreatedResponse, ApiDefaultResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConsultingRequestDto } from './consulting-request.dto';
import { ConsultingRequest } from './consulting-request.schema';
import { ConsultingRequestService } from './consulting-request.service';

@Controller('v2/consulting-request')
@ApiTags('컨설팅 신청 API')
export class ConsultingRequestController {
    constructor(private readonly consultingRequestService: ConsultingRequestService) {}

    @Post()
    @ApiOperation({ summary: '컨설팅 신청을 생성 API', description: '컨설팅 신청을 생성한다.' })
    @ApiCreatedResponse({ description: '컨설팅 신청을 생성한다.', type: String })
    async createConsultingRequest(@Body() consultingRequestDto: ConsultingRequestDto): Promise<String>{
        const generatedId = await this.consultingRequestService.create(consultingRequestDto);
        return generatedId;
    }

    @Get()
    @ApiOperation({ summary: '모든 컨설팅 신청을 가져오는 API', description: '컨설팅 신청을 생성한다.' })
    @ApiOkResponse({ description: '컨설팅 신청을 생성한다.', type: Array<ConsultingRequest> })
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
