import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';
const fs = require('fs');
const path = require('path');

@Controller("/mock-api")
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getData() {
    try {
        const dataFilePath = path.join(__dirname, '..', 'book.json');
        //console.log("the path is :", dataFilePath);
        const rawData = fs.readFileSync(dataFilePath, 'utf8');
        const data = JSON.parse(rawData);
        return data;
        } catch (error) {
          throw new Error('Failed to read data from JSON file');
        }
  }
}


