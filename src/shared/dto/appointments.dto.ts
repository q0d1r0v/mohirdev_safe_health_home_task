import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { STATUS } from '../enums/appointments.enums';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  patient_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  doctor_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  appointment_date: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: STATUS;
}
