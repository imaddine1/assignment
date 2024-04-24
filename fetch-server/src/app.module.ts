import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { Book, BookSchema } from './book.model';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/books-data"),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
