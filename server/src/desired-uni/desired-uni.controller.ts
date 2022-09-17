import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DesiredUniDto } from './desired-uni.dto';
import { DesiredUniService } from './desired-uni.service';


@Controller('v2/desired-uni')
@ApiTags('희망 대학 API')
export class DesiredUniController {
    constructor(private readonly desiredUniService: DesiredUniService) { }

    @Post()
    @ApiOperation({ summary: '희망 대학 생성 API', description: '희망 대학을 생성한다.' })
    @ApiCreatedResponse({ description: '희망 대학을 생성한다.', type: String })
    async create (@Res() response, @Body() uniDto: DesiredUniDto) {
        try {
            const uni = await this.desiredUniService.create(uniDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Desired Uni has been created successfully',
                uni,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Desired Uni not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    @ApiOperation({ summary: '희망 대학 수정 API', description: '희망 대학 데이터를 수정한다.' })
    async update (@Res() response, @Param('id') uniId: string, @Body() uniDto: DesiredUniDto) {
        try {
            const uni = await this.desiredUniService.update(uniId, uniDto);
            return response.status(HttpStatus.OK).json({
                message: 'Desired Uni has been successfully updated',
                uni,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    @ApiOperation({ summary: '희망 대학 리스트 API', description: '모든 희망 대학 리스트를 가져온다.' })
    async getAll (@Res() response) {
        try {
            const unis = await this.desiredUniService.getAll();
            return response.status(HttpStatus.OK).json({
                message: 'All scores data found successfully',
                unis,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Desired Uni GET API', description: '특정 희망 대학 데이터 하나를 가져온다.' })
    async get (@Res() response, @Param('id') uniId: string) {
        try {
            const uni = await this.desiredUniService.get(uniId);
            return response.status(HttpStatus.OK).json({
                message: 'Desired Uni found successfully',
                uni,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('user/:id')
    @ApiOperation({ summary: 'Desired Uni GET by User API', description: 'User와 관련된 희망 대학 데이터를 가져온다.' })
    async getByUser (@Res() response, @Param('id') userId: string) {
        try {
            const unis = await this.desiredUniService.getByUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'Desired Uni found successfully',
                unis,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    @ApiOperation({ summary: '희망 대학 데이터 삭제 API', description: '특정 희망 대학 데이터 하나를 삭제한다.' })
    async delete (@Res() response, @Param('id') uniId: string)
    {
        try {
            const uni = await this.desiredUniService.delete(uniId);
            return response.status(HttpStatus.OK).json({
                message: 'Desired Uni deleted successfully',
                uni,
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('user/:id')
    @ApiOperation({ summary: 'Desired Uni DELETE by User API', description: 'User와 관련된 희망 데학 데이터를 모두 삭제한다.' })
    async deleteByUser (@Res() response, @Param('id') userId: string)
    {
        try {
            await this.desiredUniService.deleteByUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'Desired Uni deleted successfully'
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
