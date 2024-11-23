import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {patients as PatientsModel} from "@prisma/client"


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<PatientsModel[]> {
    return this.appService.getHello();
  }
}
