// book.model.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  year: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
