import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { PatientModule } from './modules/patients/patient.module';

@Module({
  imports: [PrismaModule, PatientModule],
})
export class AppModule {}
