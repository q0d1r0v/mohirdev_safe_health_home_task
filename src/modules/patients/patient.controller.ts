import { Get, Controller, Query, Post, Body } from '@nestjs/common';
import { PatientsService } from './patient.service';
import { patients as PatientsModel } from '@prisma/client';
import { GetPatientsDto } from '../../shared/dto/patients.dto';
import { CreatePatientDto } from '../../shared/dto/patients.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post('/api/v1/create/patient')
  @ApiBody({ type: CreatePatientDto })
  createPatient(@Body() body: CreatePatientDto) {
    return this.patientsService.createPatient(body);
  }

  @Get('/api/v1/get/patients')
  @ApiBody({ type: GetPatientsDto })
  getPatients(@Query() getPatientsDto: GetPatientsDto) {
    return this.patientsService.getPatients(getPatientsDto);
  }
}
