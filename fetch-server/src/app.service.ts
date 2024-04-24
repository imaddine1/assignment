// app.service.ts
import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.model';
import { HttpService } from '@nestjs/axios';
import { resolve } from 'path';

@Injectable()
export class AppService {
  private readonly bookModel: Model<Document>;

  constructor(@InjectModel(Book.name) private readonly model: Model<Document>, private readonly httpService: HttpService) {
    this.bookModel = model;
  }

  async createBooks(){
    try{
      const response = await this.httpService.axiosRef.get("http://localhost:3004/mock-api");
      const arrayObj = response.data;      
     
      await this.bookModel.deleteMany({});
      await this.bookModel.insertMany(arrayObj);

      return response.data;

    }catch(error){
      console.log("error happen in database:", error);
    }

  }

  // async synchronizeWithApi(data){
  //   try{

  //     console.log("the data what we want to update", data);
  //     await this.bookModel.deleteMany({});
  //     await this.bookModel.insertMany(data);
  //     return 
    
  //   }catch(error){
  //     console.log("error happen inside service, when we synchronize");
      
  //   }
  // }
}

