import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AvailableDateDto } from './available-date.dto';
import { AvailableDateService } from './available-date.service';

@Controller('available-date')
export class AvailableDateController {
    constructor(private readonly availableDateService: AvailableDateService) { }

    @Post()
    async create (@Res() response, @Body() availableDateDto: AvailableDateDto) {
        try {
            const newDate = await this.availableDateService.create(availableDateDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Student has been created successfully',
                newDate,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Date not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async update (@Res() response, @Param('id') dateId: string, @Body() availableDateDto: AvailableDateDto) {
        try {
            const existingDate = await this.availableDateService.update(dateId, availableDateDto);
            return response.status(HttpStatus.OK).json({
                message: 'Student has been successfully updated',
                existingDate,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getAll (@Res() response) {
        try {
            const availableDateData = await this.availableDateService.getAll();
            return response.status(HttpStatus.OK).json({
                message: 'All students data found successfully',
                availableDateData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async get (@Res() response, @Param('id') dateId: string) {
        try {
            const existingDate = await this.availableDateService.get(dateId);
            return response.status(HttpStatus.OK).json({
                message: 'Student found successfully',
                existingDate,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async delete (@Res() response, @Param('id') dateId: string)
    {
        try {
            const deletedDate = await this.availableDateService.delete(dateId);
            return response.status(HttpStatus.OK).json({
                message: 'Date deleted successfully',
                deletedDate,
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
