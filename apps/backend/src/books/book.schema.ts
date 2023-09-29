import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  links: object[];

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  status: string;

  @Prop()
  postedDate: Date;

  @Prop()
  upvotes: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
