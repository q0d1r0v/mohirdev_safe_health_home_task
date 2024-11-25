import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { PatientModule } from './modules/patients/patient.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';

@Module({
  imports: [PrismaModule, PatientModule, AppointmentsModule],
})
export class AppModule {}
