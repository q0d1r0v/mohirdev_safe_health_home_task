import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { ApiBody } from '@nestjs/swagger';
import { CreateAppointmentDto } from 'src/shared/dto/appointments.dto';

@Controller('/api/v1/appointment')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post('/create')
  @ApiBody({ type: CreateAppointmentDto })
  createAppointment(@Body() body: CreateAppointmentDto) {
    return this.appointmentsService.createAppointment(body);
  }

  @Get('/get-all')
  getAppointments() {
    return this.appointmentsService.getAppointments();
  }
}
