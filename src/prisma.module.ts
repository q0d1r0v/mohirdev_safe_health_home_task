import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // PrismaService import qilinadi

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // PrismaService ni eksport qilish
})
export class PrismaModule {}
