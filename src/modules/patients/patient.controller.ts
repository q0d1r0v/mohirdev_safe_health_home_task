import {
  Get,
  Controller,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PatientsService } from './patient.service';
import {
  DeletePatientDto,
  GetPatientsDto,
  UpdatePatientDto,
} from '../../shared/dto/patients.dto';
import { CreatePatientDto } from '../../shared/dto/patients.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('/api/v1/patient')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post('/create/patient')
  @ApiBody({ type: CreatePatientDto })
  createPatient(@Body() body: CreatePatientDto) {
    return this.patientsService.createPatient(body);
  }

  @Get('/get/patients')
  @ApiBody({ type: GetPatientsDto })
  getPatients(@Query() getPatientsDto: GetPatientsDto) {
    return this.patientsService.getPatients(getPatientsDto);
  }

  @Put('/update/patient')
  @ApiBody({ type: UpdatePatientDto })
  updatePatient(@Body() updateForm: UpdatePatientDto) {
    return this.patientsService.updatePatient(updateForm);
  }

  @Delete('/delete/patient')
  @ApiBody({ type: DeletePatientDto })
  deletePatient(@Query() params: DeletePatientDto) {
    return this.patientsService.deletePatient(params);
  }
}
