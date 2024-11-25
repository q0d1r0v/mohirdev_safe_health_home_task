import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async createAppointment(body) {
    const { patient_id, doctor_name, appointment_date, status } = body;
    try {
      await this.prisma.appointments.create({
        data: {
          patient_id,
          doctor_name,
          appointment_date,
          status,
        },
      });
      return new HttpException('Created successfully!', HttpStatus.CREATED);
    } catch (err: any) {
      return new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async getAppointments() {
    try {
      return await this.prisma.appointments.findMany();
    } catch (err: any) {
      return new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
