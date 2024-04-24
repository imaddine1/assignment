import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('mock-api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async readFile() {
    return await this.appService.readFile();
  }
}
