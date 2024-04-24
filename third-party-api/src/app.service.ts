import { Injectable } from '@nestjs/common';
import * as fs from 'fs';


@Injectable()
export class AppService {

  async readFile(): Promise<void> {
    
    try{
      const data =  fs.readFileSync('book-big.json', 'utf8');
      const json = JSON.parse(data);
      console.log(json);
      return json;
    }catch(error){
      console.log("error file can't be read");
    }
  }
}