import { Module } from '@nestjs/common';
import { PatientsController } from './patient.controller';
import { PatientsService } from './patient.service';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PatientsController],
  providers: [PatientsService],
  exports: [PatientsService],
})
export class PatientModule {}
