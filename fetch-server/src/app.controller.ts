// app.controller.ts
import { Controller, Post, Body ,Get} from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("fetch-data")
  async saveDataInMongo(){

    try{
      const data =  await this.appService.createBooks();
      return data;
    }
    catch(error){
      console.log("error happen in retrieving data from the database or the api");
    }

  }

  // @Post("synchronize")
  // async synchronizeWithApi(@Body() data){
  //   try{
  //     await this.appService.synchronizeWithApi(data);
  //     return data;
  //   }catch(error){
  //     console.log("error happen in synchronizing data from api to database");
  //   }
  // }

}
