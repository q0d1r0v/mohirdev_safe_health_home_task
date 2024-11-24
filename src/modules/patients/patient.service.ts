import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { GetPatientsDto } from '../../shared/dto/patients.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async getPatients(date: GetPatientsDto) {
    return this.prisma.patients.findMany({
      where: {
        created_at: {
          gte: date.from_date,
          lte: date.to_date,
        },
      },
    });
  }

  async createPatient(patient_form) {
    try {
      const { name, age, health_history, contact_info } = patient_form;
      await this.prisma.patients.create({
        data: {
          name,
          age,
          health_history,
          contact_info,
        },
      });
      return new HttpException('Created new patient!', HttpStatus.CREATED);
    } catch (err: any) {
      return new HttpException(
        err || 'INTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
