import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsObject,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  health_history: string;

  @IsOptional()
  @IsObject()
  contact_info: Record<string, any>;
}
export class GetPatientsDto {
  @ApiProperty({
    example: '2024-11-30T23:59:59.999Z',
    description: 'The start date for filtering patients',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  from_date: Date;

  @ApiProperty({
    example: '2024-11-30T23:59:59.999Z',
    description: 'The end date for filtering patients',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  to_date: Date;
}
