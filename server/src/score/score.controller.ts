import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ScoreDto } from './score.dto';
import { ScoreService } from './score.service';

@Controller('v1/score')
@ApiTags('시험 점수 API')
export class ScoreController {
    constructor(private readonly scoreService: ScoreService) { }

    @Post()
    @ApiOperation({ summary: 'Score 생성 API', description: 'Score를 생성한다.' })
    @ApiCreatedResponse({ description: 'Score를 생성한다.', type: String })
    async create (@Res() response, @Body() scoreDto: ScoreDto) {
        try {
            const score = await this.scoreService.create(scoreDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Score has been created successfully',
                score,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Score not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Score 수정 API', description: 'Score 데이터를 수정한다.' })
    async update (@Res() response, @Param('id') scoreId: string, @Body() scoreDto: ScoreDto) {
        try {
            const score = await this.scoreService.update(scoreId, scoreDto);
            return response.status(HttpStatus.OK).json({
                message: 'Score has been successfully updated',
                score,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    @ApiOperation({ summary: 'Score 리스트 API', description: '모든 Score 리스트를 가져온다.' })
    async getAll (@Res() response) {
        try {
            const scores = await this.scoreService.getAll();
            return response.status(HttpStatus.OK).json({
                message: 'All scores data found successfully',
                scores,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Score GET API', description: '특정 Score 데이터 하나를 가져온다.' })
    async get (@Res() response, @Param('id') scoreId: string) {
        try {
            const score = await this.scoreService.get(scoreId);
            return response.status(HttpStatus.OK).json({
                message: 'Score found successfully',
                score,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('user/:id')
    @ApiOperation({ summary: 'Score GET by User API', description: 'User와 관련된 Score 데이터를 가져온다.' })
    async getByUser (@Res() response, @Param('id') userId: string) {
        try {
            const scores = await this.scoreService.getByUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'Score found successfully',
                scores,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Score 삭제 API', description: '특정 Score 하나를 삭제한다.' })
    async delete (@Res() response, @Param('id') scoreId: string)
    {
        try {
            const score = await this.scoreService.delete(scoreId);
            return response.status(HttpStatus.OK).json({
                message: 'Score deleted successfully',
                user: score,
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('user/:id')
    @ApiOperation({ summary: 'Score DELETE by User API', description: 'User와 관련된 Score를 모두 삭제한다.' })
    async deleteByUser (@Res() response, @Param('id') userId: string)
    {
        try {
            await this.scoreService.deleteByUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'Score deleted successfully'
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
