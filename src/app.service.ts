import { Injectable } from '@nestjs/common';
import {PrismaService} from "./prisma.service"
import {patients} from "@prisma/client"

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<patients[] | null> {
    return this.prisma.patients.findMany();
  }
}
